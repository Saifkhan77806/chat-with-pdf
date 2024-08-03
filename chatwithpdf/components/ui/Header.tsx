import { SignedIn, UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import {FilePlus2} from "lucide-react"
import Link from "next/link"

function Header() {
  return (
    <div className="flex justify-between bg-white shadow-sm">
        <Link href="/dashboard" > Chat to <span className="text-indigo-600">PDf</span></Link>
       <SignedIn>
        <div className="flex items-center space-x-2">

            <Button asChild variant="link" className="hidden md:flex">
                <Link href="/dashboard/upgrade">Pricing </Link>
            </Button>

            <Button asChild variant="outline">
                <Link href="/dashboard">My documents</Link>
            </Button>

            <Button asChild variant="outline">
                <Link href="/dashboard/upload">
                <FilePlus2 className="text-indigo-600"/>
                </Link>
            </Button>


            <UserButton />
        </div>
       </SignedIn>
    </div>
  )
}

export default Header