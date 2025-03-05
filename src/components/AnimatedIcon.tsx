
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedIconProps {
  icon: string;
  name?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  icon,
  name,
  color = 'bg-accent',
  size = 'md',
  className,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClass = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  };

  return (
    <div 
      className={cn(
        'flex flex-col items-center justify-center gap-2',
        className
      )}
    >
      <div
        className={cn(
          'relative rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300',
          sizeClass[size],
          isHovered ? 'scale-110' : 'scale-100',
          'bg-white shadow-soft hover:shadow-medium'
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        <div 
          className={cn(
            'absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300',
            isHovered ? 'opacity-10' : 'opacity-0',
            color
          )}
        />
        <img 
          src={icon} 
          alt={name || 'Icon'} 
          className={cn(
            'w-1/2 h-1/2 object-contain transition-transform duration-300',
            isHovered ? 'scale-110' : 'scale-100'
          )}
        />
      </div>
      {name && (
        <span className="text-xs text-center font-medium text-muted-foreground">
          {name}
        </span>
      )}
    </div>
  );
};

export default AnimatedIcon;
