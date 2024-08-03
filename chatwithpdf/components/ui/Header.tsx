import { SignedIn, UserButton } from "@clerk/nextjs"
import Link from "next/link"

function Header() {
  return (
    <div>
        <Link href="/dashboard" > Chat to <span className="text-indigo-600">PDf</span></Link>
       <SignedIn>
        <div>
            <UserButton />
        </div>
       </SignedIn>
    </div>
  )
}

export default Header