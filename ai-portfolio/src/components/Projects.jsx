import React from "react";
import ReactDom from "react-dom";

export default function Projects(props) {
  const { hideModal } = props;
  const projects = [
    {
      title: "Project 1",
      description: "This is a description of project 1.",
    },
    {
      title: "Project 2",
      description: "This is a description of project 2.",
    },
    {
      title: "Project 3",
      description: "This is a description of project 3.",
    },
  ];

  return ReactDom.createPortal(
    <div
      className="absolute top-0 left-0 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[90vw] md:h-[90vh] w-screen h-screen 
    bg-slate-900 z-50 flex flex-col shadow p-4 gap-2 overflow-scroll"
    >
      <div className="flex justify-between items-center text-2xl">
        <h1 className="text-white">Projects</h1>
        <i
          onClick={hideModal}
          className="fa-solid fa-xmark text-white cursor-pointer hover:rotate-[30deg]"
        ></i>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-white md:p-4 text-white">
          {projects.map((project, index) => (
            <div key={index} className="p-4 bg-slate-800 w-full aspect-video">
              <h2 className="text-xl">{project.title}</h2>
              <p className="text-cs">{project.description}</p>
              <div className="grid grid-cols-2 text-center">
                <a href="">Live</a>
                <a href="">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.getElementById("projects")
  );
}
