import React from 'react'
import Cerca from './Cerca'
import Sfondo from "../assets/Hero.jpg";
//icons
import { BsArrowDown } from "react-icons/bs";
//lottie
import heroAnimation from '../assets/animation-hero.json'
import { Player } from "@lottiefiles/react-lottie-player";

const Home = () => {

  return (
    <>
      <section className="relative h-screen flex items-center justify-center max-sm:flex-col">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <img className="w-full h-full object-cover" src={Sfondo} alt="Sfondo" />
        <article className=" w-full px-8 absolute z-10 flex items-center justify-between max-sm:flex-col">
          <div className='flex flex-col items-center text-white text-center'>

            <h1 className=" text-[#FFDB01] text-6xl leading-loose line font-bold mb-2">Cocktail</h1>
            <p className="text-lg mb-4 leading-loose	">La più grande lista di cocktail al mondo</p>
            <a href="#cerca">
              <button className="bg-white text-black px-6 py-4 rounded-full font-bold transition duration-300 ease-linear hover:bg-[#FFDB01] flex gap-2 items-center">
                Scorri e cerca il tuo drink <BsArrowDown className='animate-bounce text-xl' />
              </button>
            </a>
          </div>
          <div className=''>
            <Player
              autoplay
              loop
              src={heroAnimation}
              style={{ height: '400px', width: '400px' }}
            >
            </Player>
          </div>
        </article>
      </section>
      <div id='cerca' className='mx-10 lg:max-w-5xl lg:mx-auto'>
        <Cerca />
      </div>
    </>
  )

}

export default Home