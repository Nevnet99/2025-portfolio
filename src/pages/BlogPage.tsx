import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import styles from "./BlogPage.module.css";
import { BlogGrid } from "../components/Blog/BlogGrid";
import { Link } from "react-router";

// Sample post generator for infinite scroll
const generatePosts = (startIndex: number, count: number) => {
  const categories = [
    "React",
    "TypeScript",
    "CSS",
    "Performance",
    "Animation",
    "3D Development",
    "Design",
    "Architecture",
  ];

  const allTags = [
    "react",
    "typescript",
    "javascript",
    "css",
    "animation",
    "webgl",
    "threejs",
    "design",
    "performance",
    "architecture",
    "frontend",
    "development",
    "tutorial",
    "best-practices",
    "web-development",
  ];

  const getRandomTags = () => {
    const numTags = Math.floor(Math.random() * 3) + 2; // 2-4 tags per post
    const shuffled = [...allTags].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numTags);
  };

  const posts = [];

  for (let i = 0; i < count; i++) {
    const index = startIndex + i;
    const category = categories[Math.floor(Math.random() * categories.length)];
    posts.push({
      slug: `post-${index}`,
      title: `Sample Blog Post ${index}`,
      excerpt: `This is a sample blog post excerpt ${index}. It demonstrates how the content would flow in a real blog post scenario.`,
      date: new Date(2024, 0, index).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      readingTime: `${Math.floor(Math.random() * 10 + 3)} min read`,
      category,
      tags: [category.toLowerCase(), ...getRandomTags()].slice(0, 4),
    });
  }

  return posts;
};

const BlogPage = () => {
  const [posts, setPosts] = useState(generatePosts(1, 12));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadingRef = useRef<HTMLDivElement>(null);

  const loadMorePosts = useCallback(() => {
    if (!loading && hasMore) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        const newPosts = generatePosts(posts.length + 1, 6);
        setPosts((prev) => [...prev, ...newPosts]);
        setLoading(false);
        // Stop after 100 posts for this example
        if (posts.length + newPosts.length >= 100) {
          setHasMore(false);
        }
      }, 1000);
    }
  }, [loading, hasMore, posts.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMorePosts();
        }
      },
      { threshold: 0.1 }
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => observer.disconnect();
  }, [loadMorePosts]);

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.subtitle}>
          Thoughts, learnings, and insights about web development, design, and
          technology.
        </p>
        <Link to="/">Back to Home</Link>
      </motion.div>

      <BlogGrid posts={posts} />

      <div ref={loadingRef} className={styles.loadingContainer}>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.loader}
          >
            Loading more posts...
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
