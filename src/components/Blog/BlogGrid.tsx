import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./BlogGrid.module.css";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
}

interface BlogGridProps {
  posts: BlogPost[];
  noFilters?: boolean;
}

export const BlogGrid = ({ posts, noFilters }: BlogGridProps) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract unique tags from all posts
  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  ).sort();

  // Filter posts based on selected tag
  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  return (
    <div>
      {!noFilters && (
        <motion.div
          className={styles.tagContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
      >
        <motion.button
          className={`${styles.tagButton} ${!selectedTag ? styles.active : ''}`}
          onClick={() => setSelectedTag(null)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All
          </motion.button>
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              className={`${styles.tagButton} ${selectedTag === tag ? styles.active : ''}`}
              onClick={() => setSelectedTag(tag)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
          >
            {tag}
          </motion.button>
        ))}
      </motion.div>)}

      <div className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.slug}
              className={styles.post}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              layout
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/blog/${post.slug}`} className={styles.postLink}>
                <span className={styles.category}>{post.category}</span>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.meta}>
                  <time>{post.date}</time>
                  <span className={styles.readingTime}>{post.readingTime}</span>
                </div>
                <div className={styles.tags}>
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className={`${styles.tag} ${selectedTag === tag ? styles.activeTag : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedTag(tag);
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
