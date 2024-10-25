import React, { Suspense } from "react";
import { myProjects } from "../constants";
import arrUp from "../public/assets/arrow-up.png"
import arrLeft from "../public/assets/left-arrow.png"
import arrRight from "../public/assets/right-arrow.png"
import { useState } from "react";
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";


const projectCount = myProjects.length;

const Projects = () => {
  const [IndexPJ, setIndexPJ]=useState(0);
  const handleTransPJ = (direction) => {
    setIndexPJ ((preIndex) => {
      if (direction === 'back') 
        return preIndex === 0 ? projectCount -1 : preIndex -1;
      else {
        return preIndex === projectCount -1 ? 0 : preIndex +1 ;
      }
    })
  }
  
  const currentPJ = myProjects[IndexPJ];
  return (
    <section className="c-space my-20" >
      <p className="head-text">My Work</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          {/* logo */}
          <div className="absolute top-0 right-0">
            <img
              src={currentPJ.spotlight}
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentPJ.logoStyle}
          >
            <img src={currentPJ.logo} alt="" className="w-10 h-10 shadow-sm" />
          </div>
          {/* descriptions */}
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className=" text-white text-2xl font-semibold animatedText">
              {currentPJ.title}
            </p>
            <p className="animatedText">{currentPJ.desc}</p>
            <p className="animatedText">{currentPJ.subdesc}</p>
          </div>
          {/* logo tech */}
          <div className="flex flex-wrap gap-5 items-center justify-between">
            <div className="flex items-center gap-3">
              {currentPJ.tags.map((item, index) => (
                <div className="tech-logo" key={index}>
                  <img src={item.path} alt={item.name} />
                </div>
              ))}
            </div>
            {/* link project */}
            <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currentPJ.href} target="_blank">
              <p>Check Live Site</p>
              <img src={arrUp} className="h-3 w-3"/>
              </a>
          </div>

          <div className="flex justify-between items-center m-7 ">
              <button className="arrow-btn" onClick={()=>handleTransPJ ('back')}>
                <img src={arrLeft} alt="Arrow" />
              </button>
              <button className="arrow-btn" onClick={()=>handleTransPJ ('next')}>
                <img src={arrRight} alt="Arrow" className="h-4 w-4"/>
              </button>
          </div>

        </div>
        <div className="border border-black-300  bg-black-200 rounded-lg h-96 md:h-full ">
          <Canvas>
            <ambientLight intensity={1.5} />
            <directionalLight position={[10,10,5]}/>
              <Center>
                <Suspense fallback={<CanvasLoader/>} >
                <group  position={[0,-1.5,0]} >
                  <DemoComputer scale ={1.5}  
                  txt ={currentPJ.texture}
                  />
                </group>
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI /2} enableZoom={false}/>
          </Canvas>
      </div>
      </div>
      
    </section>
  );
};

export default Projects;
