export const vertexShader = `
  uniform float uTime;
  uniform float uTransition;
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    
    vec3 pos = position;
    // Only apply vertical displacement for horizontal wave
    pos.z += sin(pos.x * 10.0 + uTime * 5.0) * 0.05;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

export const fragmentShader = `
  uniform sampler2D uTexture;
  uniform sampler2D uNextTexture;
  uniform float uTransition;
  varying vec2 vUv;
  
  void main() {
    // Horizontal pixelation factor
    float pixelSize = 0.02;
    vec2 pixelatedUV = vec2(floor(vUv.x / pixelSize) * pixelSize, vUv.y);
    
    vec4 currentTexture = texture2D(uTexture, pixelatedUV);
    vec4 nextTexture = texture2D(uNextTexture, pixelatedUV);
    
    // Apply transition with horizontal reveal
    float reveal = smoothstep(0.0, 1.0, vUv.x + uTransition * 0.1);
    
    gl_FragColor = mix(currentTexture, nextTexture, reveal * uTransition);
  }
`;
