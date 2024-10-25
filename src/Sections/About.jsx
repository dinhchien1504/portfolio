import React, { useState } from "react";
import grid1 from "../public/assets/3.png";
import grid2 from "../public/assets/grid2.png";
import grid3 from "../public/assets/grid3.png";
import grid4 from "../public/assets/grid4.png";
import tick from "../public/assets/tick.svg"
import copy from "../public/assets/copy.svg"

import Globe from "react-globe.gl";
import ButtonPattern from "../components/ButtonPattern";

const About = () => {
  const [hasCopied, setHasCopied ] =useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('dinhhoangchien15042003@gmail.com');
    setHasCopied(true);
    setTimeout(() =>{
      setHasCopied(false)
    }, 2000)
  }
  return (
    <section className="c-space my-20 " id='about'>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container ">
            <img
              src={grid1}
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, Im Dinh Chien :D</p>
              <p className="grid-subtext">
                I have honed my skills in frontend and backend development
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={grid2}
              alt=""
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div className="">
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I speacialize in javaScrip/TypeScript with a focus on React and
                Next.js
              </p>
            </div>
          </div>
        </div>


        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{
                  lat: 10.8231, lng: 106.6297,
                  text: "I'm Here!",
                  color: 'white',
                  size:20 ,
                }]}
              />
            </div>
            <div className="">
              <p className="grid-headtext">
                I work 
              </p>
              <p className="grid-subtext">
                Base in Hồ Chí Minh City
              </p>
              <ButtonPattern 
              name="ContactMe"
              isBeam
              containerClass="w-full mt-10"
              />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                  <img  src={grid3} className="w-full sm:h-[266px] h-fit object-contain" />
                
                <div className="">
                  <p className="grid-headtext">
                    My Passion Coding
                  </p>
                  
                  <p className="grid-subtext">
                  I love creating incredible things
                  </p>
                </div>
                
                </div>
        </div>


        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img 
            src={grid4} 
             className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
          
          <div className="space-y-2">
            <p className="grid-headtext text-center">
                  Contact me </p>

               <div className="copy-container" onClick={handleCopy}>

                    <img src={hasCopied ? tick : copy} alt="" />
                    <p className="grid-subtext">
                      DinhHoangChien15042003@gmail.com
                    </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
