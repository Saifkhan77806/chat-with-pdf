import Header from "@/components/ui/Header";
import { ClerkLoaded } from "@clerk/nextjs";

function layout({children}:{
    children: React.ReactNode;
  }) {
  return (
    <ClerkLoaded>
        <div className="flex flex-1 flex-col h-screen">
        <Header />
        <main className="flex-1 overflow-y-auto">
        {children}
        </main>
        </div>
     </ClerkLoaded>
  )
}

export default layout