import { useState } from 'react';
import { myProjects } from '../constants/index.ts';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction: string) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const currentProject = myProjects[selectedProjectIndex];
  const colorMap = {
    blue: {
      fill: 'fill-blue-600',
      text: 'text-blue-400',
      bg: 'bg-blue-600/20',
    },
    green: {
      fill: 'fill-green-600',
      text: 'text-green-400',
      bg: 'bg-green-600/20',
    },
    'hot-pink': {
      fill: 'fill-pink-600',
      text: 'text-pink-400',
      bg: 'bg-pink-600/20',
    },
    // add more here
  }
  const colorClasses = colorMap[currentProject.color];
  return (
    <section className="c-space my-20">
      <p className="head-text text-center text-3xl font-bold text-white mb-8">Take A Look @ My Work</p>

      <div className="flex flex-col items-center relative max-w-3xl mx-auto bg-black-800 rounded-lg shadow-lg p-6">
        {/* Project Image */}
        <div className="w-full min-h-fit relative overflow-hidden rounded-lg">
          <img
            src={currentProject.texture}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="text-center text-white mt-5">
          <div className="p-3 backdrop-filter backdrop-blur-xl w-fit mx-auto rounded-lg" style={currentProject.logoStyle}>
            <img className="w-24 h-24 shadow-md mx-auto" src={currentProject.logo} alt="logo" />
          </div>

          <h3 className="text-2xl font-semibold mt-4">{currentProject.title}</h3>
      
          <div className='flex flex-row'><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={`mt-1 mr-2 size-5 shrink-0 ${colorClasses.fill} ${colorClasses.text} ${colorClasses.bg} lg:bg-black`}><path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path></svg><p className="text-gray-300 mt-2">{currentProject.desc}</p></div>
          <div className='flex flex-row'><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={`mt-1 mr-2 size-5 shrink-0 ${colorClasses.fill} ${colorClasses.text} ${colorClasses.bg} lg:bg-black`}><path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path></svg><p className="text-gray-400 mt-1">{currentProject.subdesc}</p></div>
          
          {/* Tags */}
          <div className="flex justify-center gap-3 mt-4 flex-wrap">
            {currentProject.tags.map((tag, index) => (
              <div key={index} className="items-center bg-gray-800 px-3 py-1 rounded-md text-sm text-white">
              <span className='flex flex-row'><img src={tag.path}className='w-4 h-4'/>{tag.name}
              </span>
              </div>
            ))}
          </div>

          {/* Live Site Link */}
          <a
            className="flex items-center justify-center gap-2 mt-5 text-blue-400 hover:text-blue-500"
            href={currentProject.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Check Live Site</span>
            <img src="/assets/arrow-up.png" alt="arrow" className="w-4 h-4" />
          </a>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between w-full mt-7 px-6">
          <button
            className="bg-gray-700 p-3 rounded-full hover:bg-gray-600"
            onClick={() => handleNavigation('previous')}
          >
            <img src="/assets/left-arrow.png" alt="left arrow" className="w-5 h-5" />
          </button>

          <button
            className="bg-gray-700 p-3 rounded-full hover:bg-gray-600"
            onClick={() => handleNavigation('next')}
          >
            <img src="/assets/right-arrow.png" alt="right arrow" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
