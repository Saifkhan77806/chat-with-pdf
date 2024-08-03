
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Image from "next/image";


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
            <Link href="dashboard">Get started</Link>
          </Button>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image 
          alt="app screenshot"
          src="https://pdf.ai/ogimage.jpg"
          width={2432}
          height={1442}
          className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]"></div>
          </div>
        </div>
      
      </div>
    </div>
  </main>
   </>
  );
}
