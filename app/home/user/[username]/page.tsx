import { prisma } from "@/pkg/database"
import { UserNotFound } from "@/components/userNotFound"
import UserDetailPage from "@/components/userPage"

interface UserData {
    username: string
    name: string
}

interface Result {
    status: boolean
    user: UserData | null
}

const UserPage = async ({params}: {params: {username: string}}) => {
    const data = await prisma.user.findUnique({
        where: {
            username: params.username
        }
    })

    const getUserData = async (username: string): Promise<Result> => {
        if(data === null) {
            const result: Result = {
                status: false,
                user: null
            }
            return result
        }
        
        const userData: UserData = {
            username: data!.username,
            name: data!.name
        }

        const result: Result = {
            status: true,
            user: userData
        }

        return result
    }

    
    return (
        <div>
            {/* {params.username} */}
            <div>
                {!(await getUserData(params.username)).status ? <UserNotFound username={params.username} /> : <UserDetailPage username={params.username} />}               
            </div>
            
        </div>
    )
}

export default UserPage