import { motion } from 'framer-motion';
import { Image } from './Image';

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function HeroImage({ src, alt, className }: HeroImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className={className}
    >
      <Image
        src={src}
        alt={alt}
        className="w-full h-full object-cover shadow-xl"
        priority
      />
    </motion.div>
  );
}
