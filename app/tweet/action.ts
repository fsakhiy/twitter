"use server"

import { prisma } from "@/pkg/database"
import { Prisma } from "@prisma/client"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"

interface SubmitTweetProps {
    userId: number
    content: string
}

interface RetrieveTweetProps {
    name: string
    username: string
    password: string
    postId: number
    content: string
}

interface RetrieveAllTweetResult {
    tweet: RetrieveTweetProps[]
}

interface Result {
    status: boolean,
    message: string
}

interface TweetLikeProps {
    postId: number
    userId: number
}

const uploadTweet = async ({userId, content}: SubmitTweetProps): Promise<Result> => {
    try {
        await prisma.post.create({
            data: {
                userId: userId,
                post: content
            }
        })
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            const res:Result = {
                status: false,
                message: e.message
            }
            return res
        }
    }
    
    const res: Result = {
        status: true,
        message: content
    }
    
    return res
}

const retrieveAllTweet = async () => {
    const data = await prisma.post.findMany()
}

const likeTweet = async ({userId, postId}: TweetLikeProps) => {
    try {
        await prisma.likes.create({data: {
            postId: postId,
            userId: userId
        }})
    } catch (e) {

    }
}

export {uploadTweet, retrieveAllTweet, likeTweet}