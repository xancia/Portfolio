import {Icon} from '@iconify/react'
import {useState} from "react"

export const NavBar = () => {
    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'home',
            href: '#home'
        },
        {
            id: 2,
            link: 'about',
            href: '#about'
        },
        {
            id: 3,
            link: 'portfolio',
            href: '#portfolio'
        },
        {
            id: 4,
            link: 'experience',
            href: '#experience'
        },
        {
            id: 5,
            link: 'contact',
            href: '#contact'
        },
    ]

  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 z-10'>
        <div>
            <h1 className='font-pacifico text-4xl ml-2'>Cuong Ma</h1>
        </div>

        <ul className='hidden md:flex'>
            {links.map(({id, link, href}) => 
                (<li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'><a href={href}>{link}</a></li>)
            )}
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <Icon className="text-3xl" icon="material-symbols:cancel-outline"/> : <Icon icon="lucide:align-justify" className='text-3xl'/>}
        </div> 

        
        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 z-11'>
            {links.map(({id, link, href}) => 
                    (<li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'><a href={href} onClick={()=>setNav(false)}>{link}</a></li>)
                )}
            </ul>
        )}
        
    </div>
    
  )
}
