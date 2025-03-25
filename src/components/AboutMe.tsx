import React, { useState } from "react";

const AboutMe: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"skills" | "education">("skills");


  const tabData = {
    skills: [
      { title: "Web Technologies", content: "HTML, CSS, JS, React, MongoDB, Express.js, Node.js" },
      { title: "Version Control System", content: "Git" },
      { title: "Programming Languages", content: "C, Java, Python" },
    ],
    education: [
      { title: "B-Tech", content: "Anurag University, Computer Science Engineering, CGPA: 9.27" },
      { title: "Inter", content: "Geetanjali Junior College, MPC, Marks: 956" },
      { title: "Tenth", content: "Brilliant Grammar High School, CGPA: 10" },
    ],
  };

  return (
    <section id="aboutMe" className="flex flex-col md:flex-row items-center my-10 px-4">
      {/* Image Section
        <div className="md:w-1/3 flex justify-center">
          <img
            src="/images/shivaAbout.jpg"
            alt="About Me"
            className="w-75 h-140 auto max-w-md rounded-lg object-cover object-top"
          />
        </div> */}

      {/* Content Section */}
      <div className="mt-6 md:mt-0 md:pl-8 text-gray-300">
        <h1 className="text-3xl font-semibold text-blue-500 mb-4">About Me</h1>
        <h2 className="text-2xl font-bold">Hello, I'm Shiva Mudipelly</h2>
        <p className="mt-2 text-gray-300 leading-relaxed">
          A third-year B.Tech student majoring in Computer Science Engineering at Anurag University.
          Passionate about merging theoretical knowledge with practical experiences. I thrive on
          learning and aspire to make a meaningful impact in technology. In my free time, I enjoy
          tackling coding challenges and experimenting with cutting-edge tech. Explore my portfolio
          and join me on my journey through the dynamic field of Computer Science Engineering.
        </p>

        {/* Tabs Section */}
        <div className="mt-6">
          <div className="flex space-x-6  pb-2">
            {(["skills", "education"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`group relative py-2 text-lg font-medium transition-all duration-300 ${activeTab === tab ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                <span
                  className={`absolute left-0 bottom-[5px] h-1 bg-pink-500 transition-all duration-300 ${activeTab === tab ? "w-full" : "w-0"
                    }`}
                />
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4 text-gray-200 space-y-4 animate-fade-in">
            {tabData[activeTab].map((item, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <span className="font-semibold text-pink-400">{item.title}:</span> {item.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default AboutMe;
