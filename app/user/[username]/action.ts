'use server'

import { prisma } from "@/pkg/database"

interface Follow {
    followingId: number
    followerId: number
}

interface Result {
    status: boolean
    message: string | any
}

const FollowLogic = async ({followingId, followerId}: Follow): Promise<Result> => {
    const res: Result = {
        status: true,
        message: "success"
    }

    return res
}

const FetchUserData = async (username: string): Promise<Result> => {
    const data = await prisma.user.findUnique({
        where: {
            username: username,
        },
        include: {
            Likes: true
        }
    })

    const result: Result = {
        status :true,
        message: data
    }

    return result
}

export {FollowLogic, FetchUserData}