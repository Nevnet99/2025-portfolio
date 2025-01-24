import { BlogGrid } from "./BlogGrid";
import { PageSection } from "../shared/PageSection";
import { Typography } from "../shared/Typography";
import styles from "./Blog.module.css";

const blogPosts = [
  {
    slug: "building-with-react-three-fiber",
    title: "Building Immersive 3D Experiences with React Three Fiber",
    excerpt: "React Three Fiber is a powerful React renderer for Three.js, making it easier than ever to create stunning 3D experiences on the web.",
    date: "March 15, 2024",
    readingTime: "8 min read",
    category: "3D Development",
    tags: ["3D Development", "Web Development"]
  },
  {
    slug: "mastering-framer-motion",
    title: "Mastering Animation with Framer Motion",
    excerpt: "Framer Motion is a production-ready motion library for React that makes creating animations a breeze. Let's explore how to create stunning animations that enhance user experience.",
    date: "March 12, 2024",
    readingTime: "6 min read",
    category: "Animation",
    tags: ["Animation", "User Experience"]
  },
  {
    slug: "modern-css-techniques",
    title: "Modern CSS Techniques for Better Web Design",
    excerpt: "Exploring the latest CSS features and techniques that are transforming web design. From Grid to Custom Properties, let's dive into modern CSS.",
    date: "March 10, 2024",
    readingTime: "5 min read",
    category: "CSS",
    tags: ["CSS", "Web Design"]
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for Large Applications",
    excerpt: "Learn how to effectively use TypeScript in large-scale applications. From project structure to advanced type techniques.",
    date: "March 8, 2024",
    readingTime: "10 min read",
    category: "TypeScript",
    tags: ["TypeScript", "Best Practices"]
  },
  {
    slug: "web-performance-optimization",
    title: "Advanced Web Performance Optimization",
    excerpt: "Deep dive into modern web performance optimization techniques. Learn how to make your web applications blazing fast.",
    date: "March 5, 2024",
    readingTime: "7 min read",
    category: "Performance",
    tags: ["Performance", "Web Development"]
  },
  {
    slug: "state-management-2024",
    title: "Modern State Management in React",
    excerpt: "Exploring the latest trends and best practices in React state management. From Context to Zustand and everything in between.",
    date: "March 1, 2024",
    readingTime: "9 min read",
    category: "React",
    tags: ["React", "State Management"]
  }
];

export const Blog = () => {
  return (
    <PageSection>
      <Typography as="h2" size="xl" bold className={styles.title}>
        Latest Articles
      </Typography>
      <BlogGrid posts={blogPosts} noFilters />
    </PageSection>
  );
};
