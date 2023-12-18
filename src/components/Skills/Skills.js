import React, { useState } from 'react';
import { skills } from '../../Assets/config';

const Skills = () => {
  const { show, heading, hardSkills, softSkills } = skills;
  const [displayHardSkills, setDisplayHardSkills] = useState(true);
  const [activeButton, setActiveButton] = useState(true);

  if (!show) {
    return null;
  }

  const handleToggleSkills = (isHardSkills) => {
    setDisplayHardSkills(isHardSkills);
    setActiveButton(isHardSkills);
  };

  const currentSkills = displayHardSkills ? hardSkills : softSkills;

  return (
    <div className="flex flex-col items-center bg-gray-100" id='skills'>
      <div className="w-full px-4">
        <h2 className="text-5xl mb-6 text-center">{heading}</h2>
        <div className="flex justify-center mb-4">
          <button
            className={`mr-2 px-4 py-2 border-none shadow-md rounded w-full px-4 md:w-2/3 lg:w-1/2 xl:w-full ${
              activeButton ? 'bg-white text-black' : 'bg-white text-blue-700'
            } hover:shadow-lg`}
            onClick={() => handleToggleSkills(true)}
          >
            Technical Skills
          </button>
          <button
            className={`ml-2 px-4 py-2 border-none shadow-md rounded w-full px-4 md:w-2/3 lg:w-1/2 xl:w-full ${
              !activeButton ? 'bg-white text-black' : 'bg-white text-blue-700'
            } hover:shadow-lg`}
            onClick={() => handleToggleSkills(false)}
          >
            Soft Skills
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {currentSkills.map((skill, index) => (
            <div key={index} className="flex mb-4">
              <div className="w-1/2 pr-4">
                <p className="font-semibold">{skill.name}</p>
              </div>
              <div className="w-1/2">
                <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-blue-500 absolute transition-all duration-1000"
                    style={{ width: `${skill.value}%`, left: '0' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
