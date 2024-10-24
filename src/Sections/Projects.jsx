import React from "react";
import { myProjects } from "../constants";

const Projects = () => {
  const currentPJ = myProjects[0];
  return (
    <section className="c-space my-20">
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
            <a href={currentPJ.href}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
