
import React from 'react';
import { cn } from '@/lib/utils';

interface InfiniteScrollProps {
  items: string[];
  className?: string;
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  items,
  className,
  direction = 'left',
  speed = 'normal',
}) => {
  // Duplicate items to create seamless loop
  const scrollItems = [...items, ...items];
  
  const getAnimationDuration = () => {
    switch (speed) {
      case 'slow':
        return 'animate-[infinite-scroll_35s_linear_infinite]';
      case 'fast':
        return 'animate-[infinite-scroll_15s_linear_infinite]';
      case 'normal':
      default:
        return 'animate-infinite-scroll';
    }
  };
  
  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      <div className={cn(
        "flex min-w-full shrink-0 gap-4 py-4",
        getAnimationDuration(),
        direction === 'right' ? 'flex-row-reverse' : ''
      )}>
        {scrollItems.map((item, index) => (
          <div
            key={index}
            className="w-max flex-shrink-0 rounded-lg px-4 py-2 glass"
          >
            {item}
          </div>
        ))}
      </div>
      <div className={cn(
        "flex min-w-full shrink-0 gap-4 py-4",
        getAnimationDuration(),
        direction === 'right' ? 'flex-row-reverse' : ''
      )}>
        {scrollItems.map((item, index) => (
          <div
            key={index + scrollItems.length}
            className="w-max flex-shrink-0 rounded-lg px-4 py-2 glass"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
