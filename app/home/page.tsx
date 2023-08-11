"use client"
import UserCard from "@/components/userCard"
import LinkCards from "@/components/linkCards"

const Home = () => {
    return (
        <div className="w-full min-h-screen flex flex-row bg-neutral-950 text-white">
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
            <div className="w-5/12 border border-neutral-700  justify-center p-5">This is gonna be the main feed</div>
            <div className="w-4/12 2xl:w-3/12 justify-start text-left p-5">this is gonna be trending and about asdfafsdasdfasdfasdf asdf asdf asdf asdf asdf asfd asdf asdf asdf asdf asdf </div>
            <div className="2xl:visible invisible  2xl:w-1/12">

            </div>
        </div> 
    )
}

export default Home