"use client"
import Image from 'next/image'
import { ReactNode } from "react"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Link from 'next/link';

interface UserProps {
    username: string
    name: string
    follower: number
    following: number
    posts: number
    photo: string
    about: string | null
    createdAt: Date
}

const UserHeader:React.FC<UserProps> = ({username, name, follower, following, posts, photo, about, createdAt}): ReactNode => {
    return (
        <div className='w-full border-b border-neutral-800'>
            <div>
                <div className='py-3 px-5 flex flex-row gap-5 items-center'>
                    <div>
                        <Link href={'/home'}>
                            <ArrowBackIcon />
                        </Link>
                    </div>
                    <div className='leading-5'>
                        <div className='font-semibold'>
                            {name}
                        </div>
                        <div className='text-neutral-600'>
                            {posts} posts
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex flex-row gap-3 p-5 items-end justify-between'>
                    <div>
                        <Image className='rounded-full' src={`/pfp/${photo}`} width={80} height={80} alt={name} />
                    </div>
                    <div>
                        <button className='p-2 w-24 rounded-full font-semibold text-black bg-white'>Follow</button>
                    </div>
                </div>
                <div>
                </div>
                <div className='p-5 flex flex-col gap-3'>
                    <div>
                        <div className='font-semibold text-xl'>{name}</div>
                        <div className='text-neutral-600'>@{username}</div>
                    </div>
                    <div>{JSON.parse(about!).split("\n").map((element: string) => (<>{element}<br /></>))}</div>
                    <div className='flex flex-row gap-3 text-neutral-600 text-sm'>
                        <div><CalendarMonthIcon fontSize='small' /> Joined {createdAt.toLocaleDateString('default', { month: 'long', year: 'numeric' }).toString()}</div>
                    </div>
                    <div className='flex flex-row gap-5'>
                        <div>
                            {follower} <span className='text-neutral-600'>follower</span>
                        </div>
                        <div>
                            {following} <span className='text-neutral-600'>following</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserHeader