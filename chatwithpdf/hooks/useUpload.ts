'use client';

import { useUser } from "@clerk/nextjs";
import { db, storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc } from "firebase/firestore";
import { styleText } from "util";

export enum statusText {
    uploading = "uploading file ...",
    uploaded = "file uploaded !",
    saving = "file saving to the database",
    generating = "generating AI chat with your PDf"
}

function useUpload() {
    const [progress, setProgress] = useState(Number)
    const [fieldId, setFieldId] = useState(String)
    const [status, setStatus] = useState(String)
    const {user} = useUser()
    const router = useRouter()
    
    const handleUpload = async (file: File) =>{
        if(!file || !user) return;

        const fileIdToUploadTo = uuidv4();

        const storageRef = ref(storage, `users/${user.id}/files/${fileIdToUploadTo}` ) 

        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on("state_changed", (snapshot)=>{
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 300
            );
            setStatus(statusText.uploading);
            setProgress(percent)
        },(err)=>{
            console.log("error uploading file", err)
        },async()=>{
            setStatus(statusText.uploaded)
            const download = await getDownloadURL(uploadTask.snapshot.ref)
            setStatus(statusText.saving)
            await setDoc(doc(db, "users", user.id, "files", fileIdToUploadTo),{
                name: file.name,
                size: file.size,
                type:file.type,
                downloadUrl:download,
                ref:uploadTask.snapshot.ref.fullPath,
                createdAt: new Date()
            })
            setStatus(statusText.generating)
            setFieldId(fileIdToUploadTo)
        }
    )
    }

    return {progress, status, fieldId, handleUpload}

}

export default useUpload