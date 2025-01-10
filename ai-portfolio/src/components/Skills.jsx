import React from "react";

export default function Skills() {
  const skillset = {
    Javascript: ["React", "Node.js", "Express", "Next.js", "Redux", "Jest"],
    Web: [
      "HTML",
      "CSS",
      "SASS",
      "TailwindCSS",
      "Firebase",
      "NoSQL",
      "SQL",
      "Azure",
      "GCP",
    ],
    Python: ["Django", "Data analysis"],
  };
  return (
    <div className="flex flex-col p-3 rounded shadow-xl bg-white text-black gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl">Info</h1>
        <div className="flex items-center gap-1 text-base relative after:absolute after:top-[94%] after:w-full after:h-[2px] after:right-full after:bg-purple-500 hover:after:translate-x-full after:duration-300 overflow-hidden">
          <h3 className="font-semibold">Email</h3>
          <a href="mailto:mr.ampiah@gmail.com" className="text-cyan-500">
            mr.ampiah@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-1 text-base relative after:absolute after:top-[94%] after:w-full after:h-[2px] after:right-full after:bg-purple-500 hover:after:translate-x-full after:duration-300 overflow-hidden">
          <h3 className="font-semibold">GitHub</h3>
          <a href="https://github.com/ekampiah" target="_blank"  className="text-cyan-500">
            ekampiah
          </a>
        </div>
        <div className="flex items-center gap-1 text-base relative after:absolute after:top-[94%] after:w-full after:h-[2px] after:right-full after:bg-purple-500 hover:after:translate-x-full after:duration-300 overflow-hidden">
          <h3 className="font-semibold">LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/ekampiah/"
            className="text-cyan-500"
            target="_blank"
          >
            Ebenezer Ampiah
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl">Skills</h1>
        <div className="flex flex-col gap-4">
          {Object.keys(skillset).map((key, index) => (
            <div key={index} className="flex flex-col gap-1">
              <h3 className="text-lg">{key}</h3>
              <div className="flex items-stretch gap-2 overflow-scroll">
                {skillset[key].map((skill, i) => (
                  <div
                    key={i}
                    className="rounded bg-gradient-to-r from-blue-700 to-violet-700 px-4 py-2 hover:opacity-70 text-white whitespace-nowrap"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl">Just for fun</h1>
        <div className="flex items-center gap-3 p-4 text-xl flex-wrap">
          <i className="fa-solid fa-gamepad"></i>
          <i className="fa-solid fa-headset"></i>
          <i className="fa-solid fa-chess-knight"></i>
          <i className="fa-solid fa-person-walking-luggage"></i>
          <i className="fa-solid fa-video"></i>
          <i className="fa-solid fa-football"></i>
          <i className="fa-solid fa-puzzle-piece"></i>
          <i className="fa-brands fa-apple"></i>
          <i className="fa-solid fa-bicycle"></i>
          <i className="fa-solid fa-microchip"></i>
          <i className="fa-solid fa-microphone"></i>
          <i className="fa-brands fa-playstation"></i>
          <i className="fa-solid fa-dumbbell"></i>
          <i className="fa-solid fa-yin-yang"></i>
          <i className="fa-solid fa-drum"></i>
          <i className="fa-solid fa-basketball"></i>
          <i className="fa-brands fa-xbox"></i>
          <i className="fa-brands fa-tumblr"></i>
          <i className="fa-brands fa-ubuntu"></i>
          <i className="fa-brands fa-quora"></i>
          <i className="fa-brands fa-hackerrank"></i>
          <i className="fa-brands fa-google-drive"></i>
          <i className="fa-brands fa-git-alt"></i>
          <i className="fa-brands fa-chrome"></i>
          <i className="fa-brands fa-aws"></i>
          <i className="fa-regular fa-futbol"></i>
          <i className="fa-regular fa-circle-play"></i>
          <i className="fa-regular fa-gem"></i>
        </div>
      </div>
    </div>
  );
}
