'use server'

import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache";

export async function generateEmbeding(docId:string){
    auth().protect();

    // await generateEmbedingSector(docId)

    revalidatePath("/dashboard")

    return {comppleted: true}
}