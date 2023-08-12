import UserCard from "@/components/userCard"
import LinkCards from "@/components/linkCards"
import CreateTweet from "@/components/createTweet"
import TweetCard from "@/components/tweetCard"
import { Toaster } from "react-hot-toast"
// import { retrieveAllTweet } from "@/app/tweet/action"
import { prisma } from "@/pkg/database"

const Home = async () => {        
    
    const data = await prisma.post.findMany({
        select: {
            id: true,
            post: true,
            Likes: {
                select: {
                    id: true
                }
            },
            user: {
                select: {
                    name: true,
                    username: true,
                    id: true,
                }
            }
        }
    })
        
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
            <div className="w-5/12 border border-neutral-700 h-screen justify-center overflow-y-auto overflow-x-auto">
                <div className="p-5 border-b-2 border-neutral-700 text-xl font-bold">
                    Home
                </div>
                <CreateTweet photo="placeholder.jpg"/>
                <div className="">
                 
                    {data.map((post) => (
                        <TweetCard key={post.id} postId={post.id} userId={post.user.id} likes={post.Likes.length} photo="placeholder.jpg" name={post.user.name} username={post.user.username} tweet={JSON.parse(post.post).split("\n").map((element: string) => (<>{element}<br /></>))} totalReply={100} />
                    ))}

                </div>
                

            </div>
            
            
            <div className="w-4/12 2xl:w-3/12 justify-start text-left p-5">this is gonna be trending and about asdfafsdasdfasdfasdf asdf asdf asdf asdf asdf asfd asdf asdf asdf asdf asdf </div>
            <div className="2xl:visible invisible  2xl:w-1/12">

            </div>
        </div> 
    )
}

export default Home