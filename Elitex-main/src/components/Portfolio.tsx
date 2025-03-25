import React from "react";

// Define the ProjectItem interface
interface ProjectItem {
  imageSrc: string;
  link: string;
  title: string;
  description: string;
}

const projectItems: ProjectItem[] = [
  {
    imageSrc: "/images/bustracking.png",
    link: "https://bus-tracking-system.vercel.app/",
    title: "Bus Tracking System",
    description: "MERN project",
  },
  {
    imageSrc: "/images/cloudclub.png",
    link: "https://cloudclubau.github.io/cloud/",
    title: "Cloud Club Site",
    description: "HTML, CSS, JS",
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold  mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectItems.map((project, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-50 transition duration-300">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg font-semibold flex flex-col items-center"
                >
                  <i className="fa-solid fa-eye text-3xl mb-2"></i>
                  <p>Live Preview</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
