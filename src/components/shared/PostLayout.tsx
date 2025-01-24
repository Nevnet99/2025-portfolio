import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import styles from "./PostLayout.module.css";

interface PostLayoutProps {
  children: React.ReactNode;
  type: "blog" | "project";
  title?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

export const PostLayout = ({ children, type, title }: PostLayoutProps) => {
  return (
    <motion.div 
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.header className={styles.header} variants={itemVariants}>
        <Link 
          to={type === "blog" ? "/blog" : "/"}
          className={styles.backLink}
        >
          <ArrowLeft size={20} />
          <span>Back to {type === "blog" ? "Blog" : "Projects"}</span>
        </Link>
        {title && (
          <motion.h1 
            className={styles.title}
            variants={itemVariants}
          >
            {title}
          </motion.h1>
        )}
      </motion.header>
      <motion.div 
        className={styles.content}
        variants={itemVariants}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}; 
