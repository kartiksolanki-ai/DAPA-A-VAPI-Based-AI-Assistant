"use client"
import React, { useState } from 'react';

interface VoiceCardProps {
  bgImage: string;
  title: string;
  description: string;
  badge: string;
}

const VoiceCard: React.FC<VoiceCardProps> = ({ bgImage, title, description, badge }) => {
  const [isPlay, setIsPlay] = useState(false);

  return (
    <div
      className={`relative w-72 h-60 rounded-lg bg-cover bg-center overflow-hidden shadow-md hover:shadow-[0px_0px_12px_2px_rgba(55,170,157,0.3)]  bg-gray-900`}
    // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative">
        <img src={bgImage} className='w-full h-60 object-cover' alt="" />
        <div className="absolute inset-0 bg-secondary/70 h-[100%] w-full bottom-0 flex flex-col pt-8 pb-4 px-4 ">
          <div className='my-2 text-left'>
            <h2 className="text-white font-semibold text-lg text-left">{title}</h2>
            <span className=" w-[100px] my-1 text-white text-sm px-2 py-1 rounded-md font-bold bg-blue-500/10 border border-blue-500/40">{badge}</span>
          </div>
          <div className='flex items-center mt-2 justify-between'>
            <button
              className="transition-all duration-300 ease-in-out p-2 bg-primary/10 border-2 border-primary/10 text-white rounded-full !h-[55px] !w-[55px] flex-shrink-0 flex items-center justify-center shadow-lg hover:bg-primary/20 mr-4 "
              aria-label="Play"
              onClick={() => setIsPlay(!isPlay)}
            >
              {isPlay ? "❚❚" : "▶"}
            </button>
            <div className="flex flex-col ">
              <h1 className='text-xl text-right font-bold text-white'>Best for:</h1>
              <p className="text-gray-300 text-sm text-right">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceCard;