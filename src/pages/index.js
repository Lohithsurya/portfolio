import Head from 'next/head';
import Image from "next/image";
import boy from "../Images/boy.png";
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillInstagram,AiFillLinkedin} from 'react-icons/ai'
import {useState} from 'react';
export default function Home() {
  const [darkMode, setDarkMode]=useState(false)
  return (
   <div className={darkMode ? "dark" : ""}>
    <Head>
      <title>Hey YOU!!</title>
    </Head>
    <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
      <section className=' min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-semibold font-burtons'>Hello YOU!!</h1>
          <ul className=' flex items-center'>
            <li><BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className=' cursor-pointer text-2xl'/> </li>
            <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md px-4 py-2 ml-8 text-white'>Resume</a></li>
          </ul> 
        </nav>
        <div className=' text-center py-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-bold md:text-6xl  '>Lohith Surya</h2>
            <h3 className='text-2xl font-semibold py-2 md:text-3xl'>Student</h3>
            <p className='text-md py-5 leading-8 text-gray-500 md:text-xl max-w-lg mx-auto'>currently studying 2nd year in pes university in computer science and engineering B.Tech</p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-700'>
          <AiFillInstagram />
          <AiFillLinkedin/>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 w-80 h-80 mt-20 rounded-full overflow-hidden md:h-96 md:w-96 '>
          <Image src={boy}/> 
        </div>        
      </section>
    </main>
   </div> 
  )
}
