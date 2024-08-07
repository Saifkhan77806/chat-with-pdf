'use client';
import {useDropzone} from 'react-dropzone'
import React, {useCallback, useEffect} from 'react'
import { CheckCheckIcon, CircleArrowDown, HammerIcon, Key, RocketIcon, SaveIcon } from 'lucide-react';
import useUpload, { statusText } from '@/hooks/useUpload';
import { useRouter } from 'next/navigation';


function FileUploader() {
    const {progress, status, fieldId, handleUpload} = useUpload()

    const router = useRouter();

    useEffect(()=>{
      if(fieldId){
        router.push(`/dashboard/files/${fieldId}`);
      }
    },[fieldId,router])

    console.log(progress)
    console.log(status)

    const onDrop = useCallback(async(acceptedFiles:File[]) => {
        console.log(acceptedFiles)
        const file = acceptedFiles[0]

        if(file){
            await handleUpload(file)
        }else{

        }
      }, [])


      const statusIcon: {
        [Key in statusText]: JSX.Element;
      } = {
        [statusText.uploading]:(
          <RocketIcon className='h-20 w-20 text-indigo-600'/>
        ),
        [statusText.uploaded]:(
          <CheckCheckIcon className='h-20 w-20 text-indigo-600'/>
        ),
        [statusText.saving]:(
          <SaveIcon className='h-20 w-20 text-indigo-600'/>
        ),
        [statusText.generating]:(
          <HammerIcon className='h-20 w-20 text-indigo-600'/>
        ),
      }

      const {getRootProps, getInputProps, isDragActive, isFocused, isDragAccept} = useDropzone({onDrop, accept: {
        "application/pdf": [".pdf"]
      }
    })

    const uploadProgress = progress != null && progress > 0 && progress <= 300

  return (
    <>
    <div className='flex flex-col gap-4 items-center max-w-7xl mx-auto-'>
        {/* loading tommorrow */}
        {
          uploadProgress && (
            <div className='mt-32 flex flex-col justify-center items-center gap-5'>
              <div>
                {status===statusText.uploading && <RocketIcon className='h-20 text-center animate-ping w-20 text-indigo-600'/>}
                {status===statusText.uploaded &&  <CheckCheckIcon className='h-20 text-center  animate-ping w-20 text-indigo-600'/>}
                {status===statusText.saving &&  <SaveIcon className='h-20 text-center  animate-ping w-20 text-indigo-600'/>}
                {status===statusText.generating && <HammerIcon className='h-20 text-center  animate-ping w-20 text-indigo-600'/>}
                <br />
               <p className='text-center ml-[-28]'>
                 {status}
                </p>
              </div>
            
            </div>
          )
        }
    </div>
    {!uploadProgress && (<div {...getRootProps()}
    className={`p-10 border-2 border-dashed mt-10 w-[90%] border-indigo-600 text-indigo-600 rounded-lg h-96 flex items-center justify-center mx-auto ${isFocused || isDragAccept ? "bg-indigo-300" : "bg-indigo-100"}`}
    >
    <input {...getInputProps()} />
    <div className=" flex flex-col items-center justify-center">
        {
            isDragActive ?
            <>
            <RocketIcon className='h-20 w-20 animate-ping'/>
            <p>Drop the files here ...</p>1
            </>  
            :
            <>
            <CircleArrowDown className='h-20 w-20 animate-bounce' />
            <p>Drag n drop some files here, or click to select files</p>
            </>
        }
    </div>
    </div>)}
    </>    
  )
}

export default FileUploader