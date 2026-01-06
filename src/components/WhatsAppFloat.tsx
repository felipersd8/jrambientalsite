import { MessageCircle } from 'lucide-react';
import { config } from '../config';
import { motion } from 'framer-motion';

export function WhatsAppFloat() {
  return (
    <motion.a
      href={config.whatsapp.link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-brand-green text-white p-4 rounded-full shadow-lg hover:bg-brand-green-dark transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2"
      aria-label="Chamar no WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={24} />
    </motion.a>
  );
}
