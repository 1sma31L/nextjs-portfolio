import React from 'react';
import { TItem } from '@/types/types';

function InfiniteScroll({ icons }: { icons: TItem[] }) {
  const colorVariants = {
    Red: 'hover:text-red-500 ',
    Green: 'hover:text-green-500 ',
    Blue: 'hover:text-blue-500 ',
    Yellow: 'hover:text-yellow-500 ',
    Purple: 'hover:text-purple-500 ',
    Gray: 'hover:text-gray-500 ',
    Zinc: 'hover:text-zinc-500 ',
    Orange: 'hover:text-orange-500 ',
    Cyan: 'hover:text-cyan-600 ',
  };
  const containerClass = [
    'flex w-full overflow-hidden whitespace-nowrap relative group pt-1',

    'before:absolute before:left-0 before:top-0 before:z-[2] before:h-full',
    'before:w-[30px] md:before:w-[80px]',
    'before:bg-gradient-to-r before:from-background before:to-transparent',
    'before:content-[""] before:pointer-events-none',

    'after:absolute after:right-0 after:top-0 after:z-[2] after:h-full',
    'after:w-[30px] md:after:w-[80px]',
    'after:bg-gradient-to-r after:from-transparent after:to-background',
    'after:content-[""] after:pointer-events-none',
  ].join(' ');
  const IconList = () => (
    <div className="flex shrink-0">
      {icons.map((icon, index) => (
        <div
          className={`text-4xl md:text-5xl mx-5 md:mx-7 
            ${colorVariants[icon.color]} 
            transition-all duration-75`}
          key={index}>
          {icon.icon}
        </div>
      ))}
    </div>
  );

  return (
    <div className={containerClass}>
      <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
        <IconList />
        <IconList />
      </div>
    </div>
  );
}

export default InfiniteScroll;
