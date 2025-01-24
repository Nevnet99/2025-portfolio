import { useState, useMemo, useRef } from "react";
import { PageSection } from "../shared/PageSection";
import { Typography } from "../shared/Typography";
import styles from "./Projects.module.css";
import { Button } from "../shared/Button";
import { motion } from "framer-motion";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader, Texture, ShaderMaterial } from "three";
import { Link } from "react-router-dom";
import { vertexShader, fragmentShader } from "./WaveShader";

const projects = [
  {
    title: "Kroo",
    image: "https://picsum.photos/1000/1000",
    projectId: "kroo",
    slug: "kroo"
  },
  {
    title: "Primer",
    image: "https://picsum.photos/999/1000",
    projectId: "primer",
    slug: "primer"
  },
  {
    title: "DEPT",
    image: "https://picsum.photos/888/1000",
    projectId: "dept",
    slug: "dept"
  },
  {
    title: "Oliver James Associates",
    image: "https://picsum.photos/777/1000",
    projectId: "oliver-james-associates",
    slug: "oliver-james-associates"
  }
];

interface WavyImageProps {
  texture: Texture;
}

const WavyImage = ({  texture }: WavyImageProps) => {
  const shaderRef = useRef<ShaderMaterial>(null);
  const timeRef = useRef(0);


  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uTexture: { value: texture },
      uNextTexture: { value: texture },
      uTransition: { value: 0 }
    }),
    [texture]
  );

  useFrame(() => {
    if (shaderRef.current) {
      // Continuous time for base animation
      timeRef.current += 0.01;
      shaderRef.current.uniforms.uTime.value = timeRef.current;


    }
  });

  return (
    <mesh rotation={[-0.2, 0, 0]}>
      <planeGeometry args={[2, 2, 64, 64]} />
      <shaderMaterial
        ref={shaderRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
      />
    </mesh>
  );
};

export const Projects = () => {
  const images = useLoader(TextureLoader, projects.map((project) => project.image));
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <PageSection className={styles.projectsSection} withPadding>
      <Canvas style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
      camera={{
        position: [0, 0, 3.5],
        fov: 50,
        near: 0.1,
        far: 1000,
      }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
       {hoveredIndex === 0 && <WavyImage 
          texture={images[0]}
        />}
        {hoveredIndex === 1 && <WavyImage 
          texture={images[1]}
        />}
        {hoveredIndex === 2 && <WavyImage 
          texture={images[2]}
        />}
        {hoveredIndex === 3 && <WavyImage 
          texture={images[3]}
          />}
      </Canvas>
      {/* {activeImage && <motion.img ref={imageRef} src={activeImage} alt="Projects Background" className={styles.projectsBackground} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }} />} */}
      <ul className={styles.projectsList}>
        {projects.map((project, index) => (
          <motion.li
            className={styles.projectItem}
            key={project.title}
            initial="rest"
            whileHover="hover"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(0)}
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.10 },
            }}
            transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
          >
            <Link to={`/projects/${project.slug}`} style={{ textDecoration: 'none' }}>
              <Button 
                variant="ghost" 
              >
                <Typography
                  className={styles.projectTitle}
                  as="h4"
                  size="lg"
                  bold
                >
                  {project.title}
                </Typography>
                <motion.div
                  className={styles.projectBackground}
                  variants={{
                    rest: { height: "0" },
                    hover: { height: "100%" },
                  }}
                  transition={{ duration: 0.2, ease: [0.65, 0, 0.35, 1] }}
                />
              </Button>
            </Link>
          </motion.li>
        ))}
      </ul>
    </PageSection>
  );
};
