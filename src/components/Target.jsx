import React, { useRef } from 'react'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'

const Target = (props) => {
    const targetRef = useRef();
    
    useGSAP (()=> {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y +0.5 ,
            x: targetRef.current.position.x -0.5 ,
            z: targetRef.current.position.z +0.5 ,

            duration:2.5,
            repeat: -1,
            yoyoEase: true,
            ease: "sine.inOut", // Hiệu ứng trôi nổi mềm mại
        } )
    })
    
    return (
        <group {...props} ref={targetRef} scale={1.4} rotation={[0,Math.PI/5,0]}>
            <mesh castShadow receiveShadow>
                <cylinderGeometry args={[0.14, 0.18, 2.2, 24]} />
                <meshStandardMaterial color="#606c80" metalness={0.35} roughness={0.55} />
            </mesh>

            <mesh position={[0, 1.25, 0]} castShadow receiveShadow>
                <torusGeometry args={[0.55, 0.08, 22, 64]} />
                <meshStandardMaterial color="#cfd8e3" metalness={0.5} roughness={0.35} />
            </mesh>

            <mesh position={[0, 1.25, 0.08]} castShadow receiveShadow>
                <circleGeometry args={[0.48, 64]} />
                <meshStandardMaterial color="#111827" />
            </mesh>

            <mesh position={[0, 1.25, 0.09]} castShadow receiveShadow>
                <ringGeometry args={[0.28, 0.45, 64]} />
                <meshStandardMaterial color="#ef4444" emissive="#5f1212" emissiveIntensity={0.35} />
            </mesh>

            <mesh position={[0, 1.25, 0.1]} castShadow receiveShadow>
                <circleGeometry args={[0.22, 64]} />
                <meshStandardMaterial color="#f8fafc" />
            </mesh>

            <mesh position={[0, -1.25, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[0.46, 0.56, 0.16, 32]} />
                <meshStandardMaterial color="#4b5563" metalness={0.25} roughness={0.7} />
            </mesh>
        </group>
  )
}

export default Target
