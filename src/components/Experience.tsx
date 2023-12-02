import Html5logo from '/html5-icon.svg'
import Csslogo from '/css-icon.svg'
import Jslogo from '/JS.svg'
import Tslogo from '/typescriptlogo.svg'
import Twlogo from '/tailwindcss-icon.svg'
import Reactlogo from '/reactjs-icon.svg'
import Githublogo from '/github-mark-white.svg'
import Nodelogo from '/nodejs-icon.svg'
import Mongodblogo from '/mongodb-icon.svg'

const Experience = () => {
    const tech = [
        {
            id: 1,
            src: Html5logo,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: Csslogo,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: Jslogo,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: Tslogo,
            title: 'Typescript',
            style: 'shadow-blue-700'
        },
        {
            id: 5,
            src: Twlogo,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: Reactlogo,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 7,
            src: Githublogo,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id: 8,
            src: Nodelogo,
            title: 'Node.JS',
            style: 'shadow-green-500'
        },
        {
            id: 9,
            src: Mongodblogo,
            title: 'MongoDB',
            style: 'shadow-green-600'
        },
    ]


  return (
    <div id='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    tech.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }

                
            </div>
        </div>
    </div>
  )
}

export default Experience