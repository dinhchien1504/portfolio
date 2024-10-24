import { useGSAP } from '@gsap/react';
import { Center, useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useCallback, useRef } from 'react';
import textureRing from '../public/textures/rings.png'

const Ring = ({ position }) => {
  const refList = useRef([]);
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture(textureRing);

  useGSAP(() => {
    if (refList.current.length === 0) return;
  
    refList.current.forEach((r) => {
      r.position.set(position[0], position[1], position[2]);
    });
  
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(
        refList.current.map((r) => r.rotation),
        {
          y: `+=${Math.PI * 2}`,
          x: `-=${Math.PI * 2}`,
          duration: 2.5,
          stagger: {
            each: 0.15,
          },
        },
      )
      .to(
        refList.current.map((r) => r.position),
        {
          y: "-=0.5",
          z: "+=0.5", // Điều chỉnh khoảng trôi nổi
          yoyo: true, // Lặp lại trôi nổi lên xuống
          repeat: -1,
          duration: 2, // Thời gian cho hiệu ứng trôi nổi
          ease: "sine.inOut", // Hiệu ứng trôi nổi mềm mại
        },
        0, // Chạy đồng thời với animation xoay
      );
  }, {
    dependencies: position,
  });
  

  return (
    <Center>
      <group scale={0.5}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]}></torusGeometry>
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Ring;