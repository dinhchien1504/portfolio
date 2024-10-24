import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'

const Target = (props) => {
    const targetRef = useRef();

    const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')
    
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
        <mesh {...props} ref={targetRef} scale={1.4} rotation={[0,Math.PI/5,0]}  >
            <primitive object={ scene}/>
        </mesh>
  )
}

export default Target
