import Html5logo from "/html5-icon.svg";
import Csslogo from "/css-icon.svg";
import Jslogo from "/JS.svg";
import Tslogo from "/typescriptlogo.svg";
import Twlogo from "/tailwindcss-icon.svg";
import Reactlogo from "/reactjs-icon.svg";
import Githublogo from "/github-mark-white.svg";
import Nodelogo from "/nodejs-icon.svg";
import Mongodblogo from "/mongodb-icon.svg";
import javalogo from "/java.svg";
import csharplogo from "/c-sharp-c.svg";
import dotnetlogo from "/NET_Core_Logo.svg";

const Experience = () => {
  const tech = [
    {
      id: 1,
      src: Html5logo,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Csslogo,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: Jslogo,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: Tslogo,
      title: "Typescript",
      style: "shadow-blue-700",
    },
    {
      id: 5,
      src: Twlogo,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: Reactlogo,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: Githublogo,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: Nodelogo,
      title: "Node.JS",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: Mongodblogo,
      title: "MongoDB",
      style: "shadow-green-600",
    },
    {
      id: 7,
      src: javalogo,
      title: "Java",
      style: "shadow-orange-600",
    },
    {
      id: 8,
      src: csharplogo,
      title: "C#",
      style: "shadow-purple-500",
    },
    {
      id: 9,
      src: dotnetlogo,
      title: "ASP.NET",
      style: "shadow-purple-700",
    },
  ];

  return (
    <div
      id="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen lg:h-screen pt-24 lg:pt-0"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="text-sm sm:text-xl py-6">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 text-center py-8 px-12 sm:px-36 lg:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 h-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
