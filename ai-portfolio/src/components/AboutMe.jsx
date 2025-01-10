import React from "react";

export default function AboutMe(props) {
  const { showProjects } = props;
  return (
    <div className="flex flex-col md:grid md:grid-cols-2">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-4xl md:text-6xl">Ebenezer Ampiah</h1>
          <img
            className="rounded-full w-32 h-32 md:w-48 md:h-48 md:hidden"
            src="https://media.licdn.com/dms/image/v2/C4E03AQHarDTQCpXEkg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1591643411354?e=1741824000&v=beta&t=tmOEyncgFFf-5chtivBV1J62svT_avPwVuovGBr8ZME"
            alt="Ebenezer"
          />
        </div>
        <h2 className="font-medium text-lg sm:text-2xl text-slate-600">
          Software Engineer | Ghanaian
        </h2>
        <p className="text-slate-400">
          I am a software engineer with experience in front-end development. I
          have a passion for creating beautiful and functional user interfaces.
          I am always looking to learn new technologies and improve my skills.
        </p>
        <div className="flex my-10 items-center gap-4 text-sm sm:text-base">
          <button onClick={showProjects} className="rounded-full bg-gradient-to-r from-blue-700 to-violet-700 px-4 py-2 hover:opacity-70 text-white">
            Projects
          </button>
          <button className="rounded-full border border-solid border-violet-500 px-4 py-2 hover:text-slate-500 hover:opacity-70">
            Contact
          </button>
        </div>
      </div>
      <img
        className="rounded-full w-32 h-32 sm:w-48 sm:h-48 hidden md:flex"
        src="https://media.licdn.com/dms/image/v2/C4E03AQHarDTQCpXEkg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1591643411354?e=1741824000&v=beta&t=tmOEyncgFFf-5chtivBV1J62svT_avPwVuovGBr8ZME"
        alt="Ebenezer"
      />
    </div>
  );
}
