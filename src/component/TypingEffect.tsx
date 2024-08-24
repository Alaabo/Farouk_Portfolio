// components/TypingEffect.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingEffectProps {
  text: string;
  speed?: number; // Speed of typing in milliseconds per character
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);
  

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
        
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <motion.div
      
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {displayedText}
      
    </motion.div>
  );
};

export default TypingEffect;
