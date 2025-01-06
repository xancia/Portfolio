import { Button } from "./ui/button";
import survivor from "/survivor.jpg";
import pcgamedeals from "/pcgamedeals.jpg";
import animetracker from "/animetracker.jpg";
import socialmedia from "/socialmedia.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: survivor,
      code: "https://github.com/xancia/FirstProject",
      demo: "https://xancia.github.io/FirstProject/",
    },
    {
      id: 2,
      src: pcgamedeals,
      code: "https://github.com/xancia/ProjectTwo",
      demo: "https://pcgamedeals.netlify.app/",
    },
    {
      id: 3,
      src: animetracker,
      code: "https://github.com/xancia/Final-Project",
      demo: "https://anime-tracker-e07j.onrender.com/",
    },
    {
      id: 4,
      src: socialmedia,
      code: "https://github.com/241209-NET/Cuong_Ma/tree/main/Project1",
      demo: "https://github.com/241209-NET/Cuong_Ma/tree/main/Project1",
    },
  ];

  return (
    <div
      id="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen md:pb-44 md:pt-32 pt-24 sm:pt-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="text-sm sm:text-xl py-6">
            Check out some of my work here
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, code, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="my game"
                className="rounded-md h-40 w-full duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <Button variant="ghost" className="w-1/2 h-14" asChild>
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </Button>
                <Button variant="ghost" className="w-1/2 h-14" asChild>
                  <a href={code} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
