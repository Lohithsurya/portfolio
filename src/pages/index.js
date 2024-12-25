import Head from 'next/head';
import Image from "next/image";
import boy from "../Images/boy.png";
import {BsFillMoonStarsFill,BsSunFill} from 'react-icons/bs';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin,AiOutlineArrowRight} from 'react-icons/ai';
import {useState} from 'react';

const ProjectCard = ({ title, description, link }) => (
  <div className="p-6 rounded-xl dark:bg-gray-800 bg-white w-full sm:w-80 hover:scale-105 transition-transform duration-300 ease-in-out shadow-2xl relative group">
    <h4 className="text-lg text-center font-medium py-2 dark:text-teal-400">{title}</h4>
    <p className="py-2 text-sm dark:text-gray-300 text-gray-600">{description}</p>
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-teal-600 absolute bottom-4 left-1/2 transform -translate-x-1/2 dark:text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <AiOutlineArrowRight className="text-xl" />
    </a>
  </div>
);




export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const projects = [
    { title: "Movie-Recommender", description: "The Movie Recommender System provides personalized movie suggestions based on user preferences and movie data.", link: "https://movie-recommender-by-preference.streamlit.app/" },
    { title: "Calories Burnt Prediction", description: "The Calories Burnt Prediction project uses machine learning algorithms to predict the number of calories burned based on various factors like physical activity, age, and weight.", link: "https://github.com/Lohithsurya/Calories-Burnt-Prediction" },
    { title: "Document comparison tool", description: "The Document Comparison Tool with RAG uses Retrieval-Augmented Generation (RAG) to efficiently compare documents and generate relevant insights based on their contents.", link: "#" },
    ];

  return (
   <div className={darkMode ? "dark" : ""}>
    <Head>
      <title>Hey YOU!!</title>
    </Head>
    <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
      <section className='min-h-screen'>
        <nav className='py-10 mb-6 flex justify-between'>
          <h1 className="text-xl font-semibold font-burtons text-gray-800 dark:text-teal-400">Hello You!!</h1>
          <ul className='flex items-center'>
            <li>{darkMode ? (
                  <BsSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl text-white"
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                )}</li>
            <li><a href="/assets/Resume_Lohith.pdf"><button download className='bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md px-4 py-2 ml-8 text-white shadow-lg hover:scale-105 transition-all duration-300 ease-in-out'>Resume</button></a></li>
          </ul>
        </nav>

        <div className='relative mx-auto bg-gradient-to-b from-teal-500 w-80 h-80 rounded-full overflow-hidden md:h-96 md:w-96 shadow-2xl'>
          <Image src={boy} alt="Lohith Surya" />
        </div>

        <div className='kkk text-center py-10'>
            <h2 className='text-5xl py-2 text-teal-600 dark:text-teal-400 font-bold font-rubik md:text-6xl'>Lohith Surya</h2>
            <h3 className='text-2xl font-roboto font-semibold py-2 dark:text-gray-100 md:text-3xl'>Software Engineer</h3>
            <p className='text-md py-5 leading-8 text-gray-500 dark:text-gray-100 font-roboto md:text-xl max-w-lg mx-auto'>Currently in 4th-year B.Tech CSE at PES University, with a keen interest in software engineering, data analysis, cloud technologies, and building innovative solutions through practical projects.</p>
        </div>

        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-700 dark:text-gray-100'>
          <a href='https://www.instagram.com/l_surya064/'><AiFillInstagram /></a>
          <a href='https://www.linkedin.com/in/n-lohith-surya-raj-278220238/'><AiFillLinkedin /></a>
          <a href='https://github.com/Lohithsurya'><AiFillGithub /></a>
        </div>
        
      </section>

      <section className="py-10">
        <div className="text-center">
          <h3 className="text-4xl py-1 font-roboto font-semibold dark:text-teal-400">Projects</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 py-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </main>
   </div> 
  )
}
