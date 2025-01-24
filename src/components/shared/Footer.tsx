import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="mailto:luke-brannagan@hotmail.com"
          className={styles.emailLink}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail size={20} />
          <span>luke-brannagan@hotmail.com</span>
        </motion.a>
      </motion.div>
    </footer>
  );
}; 
