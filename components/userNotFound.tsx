import { ReactNode } from "react";

interface UserProps {
    username: string
}

const UserNotFound: React.FC<UserProps> = ({username}): ReactNode => {
    return (
        <div className="bg-neutral-950 w-full h-full">
            <div className="font-semibold text-3xl text-white flex justify-center items-center h-screen ">user {username} not found</div>
        </div>
    )
}

export {UserNotFound}