const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white min-h-screen pt-10 sm:pt-0"
    >
      <div className="max-w-screen-lg p-2 sm:p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-0 sm:pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-sm mt-5 md:mt-20 md:text-xl">
          Hi! I'm Cuong, a passionate Full Stack .NET Developer.
        </p>

        <p className="text-sm mt-5 md:mt-10 md:text-xl">
        My journey into web development started at Per
          Scholas, where I discovered my love for coding and digital innovation with the MERN Stack.
          Since then, I've trained lightly in Java before being introducted to the .NET framework at Revature, specifically to the ASP.NET Core Web Api for developing robust back-end RESTful API's. 
          My two training experiences gave me the skills I needed to be well-rounded Full-Stack developer.
        </p>

        <br />

        <p className="text-sm mt-5 md:mt-10 md:text-xl">
          I believe in writing clean, efficient code and am always eager to
          embrace new challenges and learn new technologies. My approach is
          user-centric, focusing on creating intuitive and engaging digital
          experiences. 
        </p>

        <p className="text-sm mt-5 md:mt-10 md:text-xl">
        When I'm not coding, you can find me exploring the latest
          trends in technology, playing MMORPGs, or planning my next trip to
          Japan. Feel free to browse my portfolio to see my work. If you have an
          exciting project or just want to say hi, don't hesitate to contact me
          at my email or connect with me at my socials below!
        </p>
      </div>
    </div>
  );
};

export default About;
