import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Ring, useTexture } from '@react-three/drei'; // Import the camera
import CanvasLoader from '../components/CanvasLoader';
import MyRoom from '../components/MyRoom.jsx';
import {calculateSizes} from '../constants/index'
import { Button, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';
import Target from '../components/Target.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Cube from '../components/Cube.jsx';
// import Ring from '../components/Ring.jsx';
import ObjRing from "../components/Ring.jsx"
import Monitor from "../public/textures/desk/monitor.png"
import RoomCamera from '../components/RoomCamera.jsx';
import ButtonPattern  from '../components/ButtonPattern.jsx'
import Work from './Work.jsx';
import About from './About.jsx';

const Hero = (...props) => {

  // const monitorTexture = useTexture(Monitor)
// const screenTexture = useTexture ( "../public/textures/desk/screen/png")

const isMobile = useMediaQuery('(max-width:768px)');
const isSmall = useMediaQuery('(max-width:440px)');
const isTablet = useMediaQuery('(min-width:768px) and (max-width:1024px)');
const sizes = calculateSizes (isSmall,isMobile, isTablet)

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3' >
            <p className='sm:text-3xl text-2xl font-medium text-white  text-center font-generalsans'>Hi , I'm Chien 
                <span className='waving-hand'>👋 </span>
            </p>
            <p className='hero_tag text-gray_gradient'>
              Building Product & Brands
            </p>

        </div>

        <div className="w-full h-full absolute inset-0">
        {/* <Leva/> */}
            <Canvas className="w-full h-full" >
              <Suspense fallback={<CanvasLoader/>}>
              <PerspectiveCamera 
              makeDefault
              position={[0,0,30]}
              />
              <RoomCamera isMobile ={isMobile}>
              <MyRoom
              // scale ={[0.1,0.1,0.1]}
              scale ={ sizes.deskScale }
              position = {sizes.deskPosition} 
              rotation = {[0,-Math.PI,0.01]}

              />
              </RoomCamera>

              <group>
                <Target
                position = {sizes.targetPosition}
                />
                <ReactLogo
                position = {sizes.reactLogoPosition}
                />
                <Cube position= {sizes.cubePosition}/>

                <ObjRing position={sizes.ringPosition}/>
              </group>

              <ambientLight intensity={1} /> 
              <directionalLight
              
              intensity = {0.5}
              />
              </Suspense>
            </Canvas>
        </div>

        <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space '>
          <a href="#about" className='w-fit '>
            <ButtonPattern 
            name="Let's work together " isBeam
            containerClass="sm:w-fit w-3/12 sm:min-w-96  "
          />
          
          </a>
        </div>
     

    </section>
    
  )
}

export default Hero
