import { Icon } from "@iconify/react";

const ContactMe = () => {
  return (
    <div
      id="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Contact Me
          </p>
        </div>

        <div className="mt-8 md:mt-12">
          <p className="text-md sm:text-lg font-bold">
            E-MAIL
            <a
              className="relative flex items-center mx-2 sm:mx-4 my-2 text-lg sm:text-xl font-normal group"
              href="mailto:cminhma@gmail.com"
            >
              <Icon
                icon="material-symbols:arrow-outward-rounded"
                className="text-lg sm:text-2xl"
              />
              <span className="mx-2">Cminhma@gmail.com</span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-60 transition-all duration-300"></span>
            </a>
          </p>

          <p className="text-md sm:text-lg font-bold pt-4">
            Social Links
            <a
              className="relative flex items-center mx-2 sm:mx-4 my-2 text-lg sm:text-xl font-normal group"
              href="https://www.linkedin.com/in/cuong-ma/"
              target='_blank'
              rel='noreferrer'
            >
              <Icon
                icon="material-symbols:arrow-outward-rounded"
                className="text-lg sm:text-2xl"
              />
              <span className="mx-2">LinkedIn</span>
              <Icon className='text-lg sm:text-2xl' icon="mdi:linkedin"/>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-36 transition-all duration-300"></span>
            </a>

            <a
              className="relative flex items-center mx-2 sm:mx-4 my-2 text-lg sm:text-xl font-normal group"
              href="https://github.com/xancia"
              target='_blank'
              rel='noreferrer'
            >
              <Icon
                icon="material-symbols:arrow-outward-rounded"
                className="text-lg sm:text-2xl"
              />
              <span className="mx-2">GitHub</span>
              <Icon className='text-lg sm:text-2xl' icon="mdi:github-box"/>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-32 transition-all duration-300"></span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;


