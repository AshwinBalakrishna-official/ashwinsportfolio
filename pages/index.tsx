import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'


export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar xl:scrollbar-track-gray-400/20 xl:scrollbar-thumb-[#FFA500]/90 xl:scrollbar-thin xs:scrollbar-thin ' style={{scrollBehavior:'smooth'}}  >
      <Head>
        <title>Ashwin&apos;s Portfolio</title>
       
      </Head>

      {/* Header */}
        <Header />


      {/* HERO */}
       <section id="hero" className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About /> 
      </section>

      {/* Experience */}
      <section id="experience" className='snap-center'>
        <Experience /> 
      </section>

      {/* Skills */}
      <section id="skills" className='snap-center'>
        <Skills /> 
      </section>

      {/* Projects */}
      <section id="projects" className='snap-center'>
        <Projects />
      </section>

      {/* Contact me */}
      <section id="projects" className='snap-center'>
        <ContactMe />
      </section>
    </div>
    
  )
}
