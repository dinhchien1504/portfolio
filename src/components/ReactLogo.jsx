import React, { useRef, useEffect } from 'react';
import { Float, useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import ModelReact from '../public/models/react.glb';

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF(ModelReact);
  const ReactRef = useRef();

  // Use useEffect to apply the GSAP animation
  useEffect(() => {
    if (ReactRef.current) {
      gsap.to(ReactRef.current.position, {
        y: ReactRef.current.position.y + 0.5,
        x: ReactRef.current.position.x - 0.5,
        z: ReactRef.current.position.z + 0.5,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <Float floatIntensity={1}>
      <group ref={ReactRef} position={[8, 8, 0]} scale={0.6} {...props} dispose={null}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload(ModelReact);

export default ReactLogo;
