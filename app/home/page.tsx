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
        <div>
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
    )
}

export default Home