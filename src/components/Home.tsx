import {Icon} from '@iconify/react'
import HeroImage from '/heroimage.png'
import { Button } from './ui/button';

export default function Home() {
  return (
    <div id="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a Full Stack Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            An Emerging Software Engineer looking to advance my career in the industry. 
            Currently, I build applications using React, Tailwind, Typescript, and Vite.
          </p>
          <div>
            <Button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-500 to-green-500 cursor-pointer'>Portfolio
              <Icon className='group-hover:rotate-90 duration-300 ml-1' icon="material-symbols:arrow-forward-ios-rounded"/>
            </Button>
          </div>
        </div>

        <div>
          <img className='bg-gradient-to-r from-teal-500 to-green-500 rounded-md' src={HeroImage} alt="my headshot" />
        </div>
      </div>
    </div>
  );
}
