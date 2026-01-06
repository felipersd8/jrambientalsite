import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  delay?: number;
}

export function Image({ src, alt, className, priority = false, delay = 0 }: ImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={cn(
          'bg-gray-200 rounded-card flex items-center justify-center',
          className
        )}
        style={{ minHeight: '200px' }}
      >
        <span className="text-gray-400 text-sm">Imagem não disponível</span>
      </div>
    );
  }

  return (
    <motion.img
      src={src}
      alt={alt}
      className={cn('rounded-card', className)}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setError(true)}
    />
  );
}
