import React, { useRef } from 'react';
import VoiceCard from './VoiceCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Voice {
  bgImage: string;
  title: string;
  description: string;
  badge: string;
}

const Slider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  const voices: Voice[] = [
    {
      bgImage: '/img/voiceMale1.jpg',
      title: 'Road Dawg',
      description: 'Conversational, Healthcare',
      badge: '11LABS',
    },
    {
      bgImage: '/img/voiceFemale1.jpg',
      title: 'Aurora',
      description: 'British, Support',
      badge: 'PLAYHT',
    },
    {
      bgImage: '/img/voiceFemale2.jpg',
      title: 'vits-ara-1',
      description: 'Arabic',
      badge: 'NEETS',
    },
    {
      bgImage: '/img/voiceFemale1.jpg',
      title: 'Mady',
      description: 'Spanish, Commercial',
      badge: '11LABS',
    },
    {
      bgImage: '/img/voiceFemale2.jpg',
      title: 'Emma',
      description: 'Professional, Neutral',
      badge: 'ELEVENLABS',
    },
    {
      bgImage: '/images/jacob.jpg',
      title: 'Jacob',
      description: 'Technical, Informative',
      badge: 'PLAYHT',
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center justify-between w-full">
        <button
          onClick={scrollLeft}
          className=" text-white w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-opacity-70"
          aria-label="Scroll Left"
        >
          
          <ChevronLeft/>
        </button>
        
        <div 
          ref={sliderRef}
          className="flex overflow-x-scroll space-x-8 py-6 scroll-smooth flex-grow mx-4 
          cursor-grab touch-pan-y justify-between
            scrollbar-hide 
            [&::-webkit-scrollbar]:hidden 
            [-ms-overflow-style:none] 
            [scrollbar-width:none]"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {voices.map((voice, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 scroll-snap-align-start"
              style={{ 
                width: 'calc(33.333% - 1rem)', 
                maxWidth: '300px',
                minWidth: '250px'
              }}
            >
              <VoiceCard {...voice} />
            </div>
          ))}
        </div>
        
        <button
          onClick={scrollRight}
          className=" text-white w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-opacity-70"
          aria-label="Scroll Right"
        >
          <ChevronRight/>
        </button>
      </div>
    </div>
  );
};

export default Slider;