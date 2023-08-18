import LinkCards from "@/components/linkCards";
import UserCard from "@/components/userCard";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export default function HomeLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <div className="w-full min-h-screen flex flex-row bg-neutral-950 text-white">
            <Toaster />
            {/** this is gonna be the navigation */}
            <div className="2xl:visible invisible 2xl:w-1/12">
                
            </div>
            <div className="flex flex-col h-screen w-4/12 2xl:w-3/12 p-10">
                <div className="flex-none">
                    <div className="text-5xl font-bold">
                        Twitter
                    </div>
                </div>
                <div className="flex-grow py-10 gap-5 flex flex-col">
                    <LinkCards icon="home" link="Home" />
                    <LinkCards icon="search" link="Explore" />
                    <LinkCards icon="notifications" link="Notifications" />
                </div>
                <div className="flex-none">
                    <UserCard name="fairuz" username="@fairuz" photo="placeholder.jpg" />
                                        
                </div>
            </div>

            
            {/** this is gonna be the main feed */}
            <div className="w-5/12 border-r border-l border-neutral-800 h-screen justify-center overflow-y-auto overflow-x-auto ">
                {children}
            </div>
            
            
            <div className="w-4/12 2xl:w-3/12 justify-start text-left p-5">this is gonna be trending and about asdfafsdasdfasdfasdf asdf asdf asdf asdf asdf asfd asdf asdf asdf asdf asdf </div>
            <div className="2xl:visible invisible  2xl:w-1/12">

            </div>
        </div> 
    )
}