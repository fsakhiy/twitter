import { ReactNode } from "react"
import Image from 'next/image'

interface UserInfo {
    username: string
    photo: string
    name: string
}

const UserCard: React.FC<UserInfo> = ({username, photo, name}): ReactNode => {
    return (
        <div className="w-full flex flex-row gap-5">
            <div className="items-center  ">
                <Image className="rounded-full" src={`/pfp/${photo}`} width={50} height={50} alt={`${photo}`} />
            </div>
            <div className="w-full  justify-center  flex flex-col">
                <div className="font-semibold text-lg"><p>{name}</p></div>
                <div className="text-neutral-500"><p>{username}</p></div>
            </div>
        </div>
    )
}

export default UserCard