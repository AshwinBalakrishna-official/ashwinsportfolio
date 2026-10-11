import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'


export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-[100dvh] snap-y snap-proximity md:snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#FFA500]/90' style={{scrollBehavior:'smooth'}}>
      <Head>
        <title>Ashwin&apos;s Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <Header />

      {/* HERO */}
      <section id="hero" className='snap-start -mt-[76px] sm:-mt-[84px]'>
        <Hero />
      </section>

      {/* About */}
      <section id="about" className='snap-start'>
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className='snap-start'>
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects />
      </section>

      {/* Contact me */}
      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>
    </div>
  )
}
