'use client';

import React from 'react'
import {PlusCircleIcon} from "lucide-react"
import { Button } from './ui/button'
import { useRouter } from 'next/navigation';

function PlaceholderDocu() {

const router = useRouter()

    const clicked = () =>{
        router.push("/dashboard/upload")
    }

  return (
    <Button onClick={clicked} className='flex flex-col items-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400'>
        <PlusCircleIcon className='h-16 w-16' />
        <p>Add A Document</p>
    </Button>
  )
}

export default PlaceholderDocu