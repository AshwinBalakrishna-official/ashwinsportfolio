import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Ashwin&apos;s Portfolio</title>
       
      </Head>

      {/* Header */}
        <Header />


      {/* HERO */}
        <section id="hero">
            <Hero />
        </section>

      {/* About */}


      {/* Experience */}


      {/* Skills */}


      {/* Projects */}


      {/* Contact me */}
    </div>
    
  )
}
