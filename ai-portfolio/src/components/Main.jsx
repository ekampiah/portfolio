import React from "react";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";

const Main = () => {
  const [showModal, setShowModal] = React.useState(false);

  const hideModal = () => {
    setShowModal(false);
  }

  const showProjects = () => {
    setShowModal(true);
  }

  return (
    <div className="p-4 flex flex-col md:grid md:grid-cols-4">
      {showModal && <Projects hideModal={hideModal} />}
      <div className="flex flex-col gap-4 md:col-span-3">
        <AboutMe showProjects={showProjects}/>
        <Experience />
      </div>
      <Skills />
    </div>
  );
};

export default Main;
