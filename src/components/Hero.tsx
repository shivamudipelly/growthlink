import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-[20px]">
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/images/shiva.jpg"
          alt="Shiva"
          className="w-80 h-80 rounded-full border border-white"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h3 className="text-[34px] font-bold text-transparent bg-gradient-to-r from-[#CFDEF3] to-[#E0EAFC] bg-clip-text tracking-[3px]">
          Hi, I'm Shiva
        </h3>
        <h3 className="text-[25px] italic font-sans text-transparent font-bold bg-gradient-to-r from-[#A5FECB] via-[#20BDFF] to-[#5433FF] bg-clip-text">Dedicated web developer.</h3>
        <h3 className=">text-[20px] font-bold font-mono text-gray-600">
          Explore my portfolio to see my passion for creating responsive websites using the latest
          technologies.
        </h3>
        <button
          onClick={() => {
            const contactSection = document.getElementById('contact');
            contactSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="btn"
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Hero;
