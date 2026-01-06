import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Card({ children, className, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={cn('card', className)}
    >
      {children}
    </motion.div>
  );
}
