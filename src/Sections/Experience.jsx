import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { workExperiences } from '../constants';
import { OrbitControls } from '@react-three/drei';
import Me from '../components/Me';

const Experience = () => {
        const [animationName,setAnimationName] = useState('idle')

  return (
    <section className=' c-space my-20 block'>
      <div className="w-full text-white-600 ">
        <h3 className='head-text'>
            My Work Experience
        </h3>
        <div className="work-container">
            <div className="work-canvas">
                <Canvas>
                    <ambientLight intensity={3}/>
                    <spotLight position={[10,10,10]} angle={0.15} penumbra={1}/>
                    <directionalLight position={[10,10,10]} intensity={1}/>
                    <OrbitControls enableZoom={false} maxPolarAngle={Math.PI /2}/>
                    <Suspense>
                        <Me position={[0,-3,0]} scale={3} animationName={animationName} />
                    </Suspense>
                </Canvas>
            </div>
                <div className="work-content">
                    <div className="sm:py-10 py-10 sm:px-5 px-2.5">
                        {workExperiences.map( ({id ,name, pos,icon ,duration , title , animation}) => (     
                            <div className="work-content_container group " key={id} onClick={()=> {
                                setAnimationName(animation.toLowerCase())
                            }} onPointerOver={()=> setAnimationName(animation.toLowerCase())} onPointerOut={()=> setAnimationName("idle")} >
                                <div className="flex flex-col h-full justify-start items-center py-2 ">
                                    <div className="work-content_logo ">
                                        <img src={icon} alt="logo" className='w-full h-full' />
                                    </div>
                                    <div className="work-content_bar" />

                                   
                                </div>
                                <div className="sm:p-5 px-2.5 py-5">
                                        <p className='font-bold text-white-800'>
                                            {name}   
                                        </p>
                                        <p className='text-sm mb-5'>
                                        </p>
                                            {pos} -- {duration}
                                        <p className='group-hover:text-white transition ease-in-out duration-500'>
                                            {title}
                                         </p>
                                    </div>

                            </div>
                        ))}
                    </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
