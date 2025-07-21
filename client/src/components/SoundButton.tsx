import React from 'react';
import { Button } from '@/components/ui/button';
import { useSoundEffects } from '@/hooks/useSoundEffects';

interface SoundButtonProps extends React.ComponentProps<typeof Button> {
  soundType?: 'click' | 'submit';
}

export const SoundButton: React.FC<SoundButtonProps> = ({ 
  children, 
  onClick, 
  onMouseEnter,
  soundType = 'click',
  ...props 
}) => {
  const { playClickSound, playHoverSound, playSubmitSound } = useSoundEffects();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (soundType === 'submit') {
      playSubmitSound();
    } else {
      playClickSound();
    }
    
    if (onClick) {
      onClick(e);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    playHoverSound();
    
    if (onMouseEnter) {
      onMouseEnter(e);
    }
  };

  return (
    <Button
      {...props}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </Button>
  );
};