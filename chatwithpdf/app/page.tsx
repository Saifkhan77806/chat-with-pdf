import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link";


const features = [
  {
    name: "share pdf document",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, corporis.",
    icon: BrainCogIcon
  },
  {
    name: "share pdf document",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, corporis.",
    icon: EyeIcon
  },
  {
    name: "share pdf document",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, corporis.",
    icon: GlobeIcon
  },
  {
    name: "share pdf document",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, corporis.",
    icon: MonitorSmartphoneIcon
  },
  {
    name: "share pdf document",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, corporis.",
    icon: ServerCogIcon
  },
  {
    name: "share pdf document",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, corporis.",
    icon: ZapIcon
  }
]

export default function Home() {

  
  return (
   <>
  <main className=" flex-1 bg-gradient-to-bl from-white to-indigo-600 overflow-scroll p-2 lg:p-5">
    <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
      <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-base font-semibold leading-7 text-indigo-600 ">Chat with pdf</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl ">
          Lorem ipsum dolor sit amet.
        </p>
        <p className="mt-6 items-center  text-lg leading-8 text-gray-600">
          Lorem, ipsum dolor. <span className="text-indigo-600"> chat with pdf</span>
          <br />
          <br />
          </p>
          <p>
          Lorem ipsum dolor, sit amet consectetur <span className="text-indigo-600"> chat with pdf</span>  adipisicing elit. Lorem ipsum dolor sit amet.
          </p>
          <Button asChild className="mt-7">
            <Link href="signin">Get started</Link>
          </Button>
      </div>
    </div>
  </main>
   </>
  );
}
