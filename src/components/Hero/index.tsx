import { Typography } from "../shared/Typography";
import { PageSection } from "../shared/PageSection";
import styles from "./Hero.module.css";
import { Button } from "../shared/Button";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <PageSection as="section">
      <div className={styles.revealContainer}>
        <motion.div
          className={styles.title}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 200 }}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        >
          <Typography className={styles.title} as="h1" size="xl">
            luke <br /> brannagan
          </Typography>
        </motion.div>
      </div>

      <Typography as="h2" size="md">
        <motion.span
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.65, 0, 0.35, 1] }}
        >
          senior
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.65, 0, 0.35, 1] }}
        >
          frontend
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.65, 0, 0.35, 1] }}
        >
          developer
        </motion.span>
      </Typography>

      <motion.footer
        className={styles.footer}
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Button type="button" variant="icon">
          <ArrowDown />
          <Typography as="p" size="copy">
            Scroll to explore
          </Typography>
        </Button>
      </motion.footer>
    </PageSection>
  );
};
