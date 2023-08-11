import React, { useRef } from 'react';
import Image from 'next/image';

interface TweetProps {
    photo: string
}

const CreateTweet: React.FC<TweetProps> = ({photo}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }
  };

  return (
    <div className='flex flex-row gap-3 w-full border-b-2 border-neutral-700 p-10'>
        <div>
            <Image className="rounded-full" src={`/pfp/${photo}`} width={50} height={50} alt={`${photo}`} />
        </div>
        <div className='flex flex-col gap-3 w-full'>
            <div className='p-3 border-b-2 border-neutral-700'>
                <textarea
                  ref={textAreaRef}
                  className="resize-none outline-none placeholder:text-lg placeholder:text-neutral-600 bg-neutral-950 w-full h-12 p-2 rounded-md overflow-hidden"
                  onInput={handleInput}
                  placeholder="Whats on your mind..."
                ></textarea>
            </div>
            <div className='flex justify-end w-full'>
                <button className='bg-blue-500 p-2 font-semibold text-lg rounded-full w-20'>Post</button>
            </div>
        </div>
    </div>
  );
};

export default CreateTweet;
