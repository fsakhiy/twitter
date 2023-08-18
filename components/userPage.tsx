
import { prisma } from "@/pkg/database"
import UserHeader from "@/components/aboutuser/header"
import TweetCard from "@/components/tweetCard"

interface UserProps {
    username: string
}

const UserDetailPage = async ({username}: UserProps) => {

    const userData = await prisma.user.findUnique({
        where: {
            username: username
        },
        include: {
            Follower: true,
            Following: true,
            Likes: true,
            Post: {
                include: {
                    Likes: true,
                    user: true
                }
            }
        }
    })
    
    return (
        <div className="w-full min-h-screen bg-neutral-950 text-white">
            <div className="">
                <UserHeader username={userData!.username} name={userData!.name} posts={userData!.Post.length} follower={userData!.Follower.length} following={userData!.Following.length} photo={userData!.photo} about={userData!.about} createdAt={userData!.createdAt} />
            </div>
            <div>
                {userData!.Post.map((post) => (
                    <TweetCard key={post.id} postId={post.id} userId={post.userId} likes={post.Likes.length} photo="placeholder.jpg" name={post.user.name} username={post.user.username} tweet={JSON.parse(post.post).split("\n").map((element: string) => (<>{element}<br /></>))} totalReply={100} />
                ))}
            </div>
        </div>
    )
}

export default UserDetailPage