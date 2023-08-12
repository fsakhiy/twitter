"use client"
import React, { ChangeEvent, useRef, useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { uploadTweet } from '@/app/tweet/action';

interface TweetProps {
    photo: string
}

interface TweetPropsSubmit {
  userId: number
  content: string
}

const CreateTweet: React.FC<TweetProps> = ({photo}) => {
  const [text, setText] = useState("")

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }
  };

  const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const tweet = async () => {
    const loading = toast.loading("uploading tweet")
    const textJson = JSON.stringify(text)
    const tweetSubmit: TweetPropsSubmit = {
      userId: 8,
      content: textJson
    }
    const res = await uploadTweet(tweetSubmit)
    if (!res.status) {
      toast.error(res.message, {id: loading})
      return
    }

    toast.success(res.message, {id:loading})
  }

  return (
    <div className='flex flex-row gap-3 w-full border-b-2 border-neutral-700 p-10'>
        <div>
            <Image className="rounded-full" src={`/pfp/${photo}`} width={50} height={50} alt={`${photo}`} />
        </div>
        <div className='flex flex-col gap-3 w-full'>
            <div className='p-3 border-b-2 border-neutral-700'>
                <textarea
                  value={text}
                  onChange={changeText}
                  ref={textAreaRef}
                  className="resize-none outline-none placeholder:text-lg placeholder:text-neutral-600 bg-neutral-950 w-full h-12 p-2 rounded-md overflow-hidden"
                  onInput={handleInput}
                  placeholder="Whats on your mind..."
                ></textarea>
            </div>
            <div className='flex justify-end w-full'>
                <button 
                className='bg-blue-500 p-2 font-semibold text-lg rounded-full w-20'
                onClick={tweet}
                >Post</button>
            </div>
        </div>
    </div>
  );
};

export default CreateTweet;
