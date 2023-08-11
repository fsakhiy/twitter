import Image from 'next/image'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
// import 
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';

interface TweetProps {
    name: string
    username: string
    photo: string
    tweet: string
    likes: number
    totalReply: number
}

const TweetCard: React.FC<TweetProps> = ({name, username, photo, tweet, likes, totalReply}) => {
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
                        <div className="text-neutral-700">@{username}</div>
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
                    <FavoriteOutlinedIcon fontSize='small' />
                </div>
            </div>
        </div>
    )
}

export default TweetCard