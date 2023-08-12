"use client"
import Image from 'next/image'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
// import 
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { ReactNode } from 'react';
import { likeTweet } from '@/app/tweet/action';
import toast from 'react-hot-toast';

interface TweetProps {
    userId: number
    postId: number
    name: string
    username: string
    photo: string
    tweet: ReactNode
    likes: number
    totalReply: number
}

interface TweetLike {
    userId: number
    postId: number
}

const TweetCard: React.FC<TweetProps> = ({userId, postId, name, username, photo, tweet, likes, totalReply}) => {

    const likeATweet = async () => {        
        const likeData: TweetLike = {
            userId: userId,
            postId: postId
        }
        
        await likeTweet(likeData)
        toast.success('liked a post from ' + username)
    }
    
    return (
        <div className="p-5 flex flex-col gap-5 w-full border-b border-neutral-700">
            <div className='flex flex-row gap-3'>
                <div className="flex gap-3 w-1/12">
                    <div>
                        <Image className="rounded-full" src={`/pfp/${photo}`} width={50} height={50} alt={`${photo}`} />
                    </div>
                </div>
                <div className='flex flex-col gap-5 w-11/12'>
                    <div className="flex flex-row gap-3">
                        <div className="font-semibold">{name}</div>
                        <div className="text-neutral-500">@{username}</div>
                    </div>
                    <div>
                        <p>{tweet}</p>
                    </div>
                </div>
            </div>
            <div className='w-full justify-end flex flex-row gap-10'>
                <div className='flex flex-row gap-3'>
                    <p>{totalReply}</p>
                    <ReplyOutlinedIcon fontSize='small' />
                </div>
                <div className='flex flex-row gap-3'>
                    <p>{likes}</p>
                    <button onClick={likeATweet}><p className='hidden'>Likes</p><FavoriteOutlinedIcon fontSize='small' /></button>
                </div>
            </div>
        </div>
    )
}

export default TweetCard