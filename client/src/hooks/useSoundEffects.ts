import { useCallback, useRef } from 'react';

// Sound URLs - using Web Audio API to generate smooth modern sounds
const createClickSound = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Modern click sound - soft beep
  oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.1);
  
  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
  
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.1);
};

const createHoverSound = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Soft hover sound
  oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(450, audioContext.currentTime + 0.05);
  
  gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
  
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.05);
};

const createSubmitSound = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Success sound - ascending tone
  oscillator.frequency.setValueAtTime(500, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.2);
  
  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
  
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.2);
};

export const useSoundEffects = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const initAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      try {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      } catch (error) {
        console.log('Audio context not supported');
      }
    }
  }, []);

  const playClickSound = useCallback(() => {
    try {
      initAudioContext();
      createClickSound();
    } catch (error) {
      console.log('Could not play click sound');
    }
  }, [initAudioContext]);

  const playHoverSound = useCallback(() => {
    try {
      initAudioContext();
      createHoverSound();
    } catch (error) {
      console.log('Could not play hover sound');
    }
  }, [initAudioContext]);

  const playSubmitSound = useCallback(() => {
    try {
      initAudioContext();
      createSubmitSound();
    } catch (error) {
      console.log('Could not play submit sound');
    }
  }, [initAudioContext]);

  return {
    playClickSound,
    playHoverSound,
    playSubmitSound,
  };
};