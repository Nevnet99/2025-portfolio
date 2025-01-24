import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PostLayout } from './shared/PostLayout'





const ProjectPage = () => {
  const { slug } = useParams()
  const [Content, setContent] = useState<React.ComponentType | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [title, setTitle] = useState<string>('')

  useEffect(() => {
    const loadContent = async () => {
      try {
        const module = await import(`../content/projects/${slug}.mdx`)
        setContent(() => module.default)
        // Extract title from the first h1 in MDX
        const titleMatch = module.default.toString().match(/# (.*)/);
        if (titleMatch) {
          setTitle(titleMatch[1]);
        }
      } catch (e) {
        console.error('Failed to load project:', e)
        setError('Project not found')
      }
    }

    loadContent()
  }, [slug])

  if (error) {
    return (
      <PostLayout type="project">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {error}
        </motion.div>
      </PostLayout>
    )
  }

  if (!Content) {
    return (
      <PostLayout type="project">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Loading...
        </motion.div>
      </PostLayout>
    )
  }

  return (
    <PostLayout type="project" title={title}>
      <Content />
    </PostLayout>
  )
}

export default ProjectPage 
