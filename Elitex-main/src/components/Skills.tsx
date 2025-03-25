import React from "react";

// Define the Skill interface
interface Skill {
  name: string;
  icon: string; // Font Awesome class name (e.g., "fab fa-react")
  color: string; // Tailwind color class for the icon
}

// Skills array
const skills: Skill[] = [
  { name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-purple-600" },
  { name: "C", icon: "fas fa-copyright", color: "text-gray-500" },
  { name: "CSS", icon: "fab fa-css3-alt", color: "text-blue-600" },
  { name: "Express", icon: "fas fa-server", color: "text-gray-800" },
  { name: "GitHub", icon: "fab fa-github", color: "text-gray-700" },
  { name: "HTML", icon: "fab fa-html5", color: "text-orange-600" },
  { name: "Java", icon: "fab fa-java", color: "text-red-600" },
  { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-500" },
  { name: "MongoDB", icon: "fas fa-database", color: "text-green-600" },
  { name: "Node.js", icon: "fab fa-node", color: "text-green-500" },
  { name: "Postman", icon: "fas fa-envelope-open-text", color: "text-orange-500" },
  { name: "PowerPoint", icon: "fas fa-file-powerpoint", color: "text-red-500" },
  { name: "Python", icon: "fab fa-python", color: "text-blue-500" },
  { name: "React", icon: "fab fa-react", color: "text-cyan-500" },
  { name: "SQL", icon: "fas fa-database", color: "text-blue-900" },
  { name: "Excel", icon: "fas fa-file-excel", color: "text-green-700" },
  { name: "MS Word", icon: "fas fa-file-word", color: "text-blue-700" },
];

// Sort skills alphabetically
skills.sort((a, b) => a.name.localeCompare(b.name));

const Skills: React.FC = () => {
  return (
    <div id="skills" className="py-16 px-4 bg-gray-50 flex justify-center">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-white shadow-md w-28"
            >
              <i className={`${skill.icon} ${skill.color} text-4xl mb-2`}></i>
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
