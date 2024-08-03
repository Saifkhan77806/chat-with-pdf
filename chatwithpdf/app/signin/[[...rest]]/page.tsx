import React from 'react'
import { SignIn } from '@clerk/nextjs'

function page() {
  return (
    <>
    <div>sign in </div>
    <SignIn />
    </>
  )
}

export default page