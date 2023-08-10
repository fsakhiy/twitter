"use client"
import UserCard from "@/components/userCard"
import LinkCards from "@/components/linkCards"

const Home = () => {
    return (
        <div className="w-full min-h-screen flex flex-row bg-neutral-950 text-white">
            <div className="w-1/12">
            </div>
            <div className="flex flex-col h-screen w-3/12 p-10">
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
            <div className="w-5/12 border border-neutral-700 min-s-screen justify-center p-5">THIS IS A DIV</div>
            <div className="w-3/12 min-s-screen justify-start text-left p-5">THIS IS A DIV</div>
            <div className="w-1/12">

            </div>
        </div> 
    )
}

export default Home