declare module 'canvas-confetti' {
    interface Options {
      particleCount?: number;
      angle?: number;
      spread?: number;
      startVelocity?: number;
      decay?: number;
      gravity?: number;
      drift?: number;
      ticks?: number;
      x?: number;
      y?: number;
      shapes?: string[];
      zIndex?: number;
      colors?: string[];
      disableForReducedMotion?: boolean;
      scalar?: number;
      origin?: { x?: number; y?: number };
      position?: { x?: number; y?: number };
    }
  
    export default function confetti(options?: Options): Promise<null>;
  }
  