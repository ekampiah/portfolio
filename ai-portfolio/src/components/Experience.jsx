import React from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Microsoft",
      description: "Worked on the Microsoft Consumer Subscriptions.",
    },
    {
      title: "Senior Developer",
      company: "Vitech",
      description: "Worked on the NextGen R&D team",
    },
    {
      title: "Title 3",
      company: "Company 3",
      description: "Worked on some stuff",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {experiences.map((experience, index) => (
        <div key={index} className="flex flex-col gap-2">
          <h1 className="text-lg font-bold uppercase">{experience.company}</h1>
          <h2 className="text-base font-medium text-slate-500 flex items-baseline gap-3">
            {experience.title}
          </h2>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
  );
}
