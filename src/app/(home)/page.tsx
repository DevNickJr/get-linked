import Image from 'next/image'
import React from 'react'
import ManImg from "@/assets/man.png"
import OrbImg from "@/assets/orbs.png"
import IdeaImg from "@/assets/idea.png"
import RulesImg from "@/assets/rules.png"
import JudgeImg from "@/assets/judge.png"
import CasualImg from "@/assets/casual.png"

const Home = () => {
  return (
    <div className=''>
        <section className='relative max-h-screen px-8 text-center md:text-left md:h-screen'>
            <h1 className='mb-12 italic font-semibold mt-28'>Igniting a Revolution in HR Innovation</h1>
            <div className='items-center md:flex'>
                <div className='flex flex-col items-center flex-1 gap-3 md:gap-6 md:items-start'>
                    <h1 className='text-3xl font-bold lg:text-6xl md:text-5xl font-clash'>getlinked Tech <br />Hackathon <span className='text-primary'>1.0</span></h1>
                    <p className='max-w-xs text-sm'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                    <button className='p-3.5 px-10 md:px-14 text-sm rounded grad-to-r w-fit'>Register</button>
                    <p className='text-5xl font-normal'>00   00   00</p>
                </div>
                <div className='relative flex-1'>
                    <Image src={ManImg} alt={"man"} className='object-cover w-full h-full' />
                    <Image src={OrbImg} alt={"orb"} className='absolute top-0 left-0 object-cover w-full h-full z-1' />
                </div>
            </div>
        </section>
        <section className='flex flex-col items-center gap-6 p-8 px-8 text-center md:gap-12 md:flex-row md:text-left'>
            <div className='flex-1'>
                <Image src={IdeaImg} alt={"idea"} className='object-cover w-full h-full' />
            </div>
            <div className='flex flex-col flex-1 gap-3'>
                <h1 className='text-2xl font-bold md:text-3xl font-clash'>Introduction to getlinked <br /> <span className='text-primary'>tech Hackathon 1.0</span></h1>
                <p className='max-w-md text-xs leading-6 text-light'>
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you&apos;re a coding genius, a design maverick, or a  concept wizard, you&apos;ll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that&apos;s what we&apos;re all about!
                </p>
            </div>
        </section>
        <section className='flex flex-col items-center gap-6 p-8 px-8 text-center md:gap-12 md:flex-row-reverse md:text-left'>
            <div className='flex-1'>
                <Image src={RulesImg} alt={"rules"} className='object-cover w-full h-full' />
            </div>
            <div className='flex flex-col flex-1 gap-3'>
                <h1 className='text-2xl font-bold md:text-3xl font-clash'>Rules and <br /> <span className='text-primary'>Guidelines</span></h1>
                <p className='max-w-md text-xs leading-6 text-light'>
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you&apos;re a coding genius, a design maverick, or a  concept wizard, you&apos;ll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that&apos;s what we&apos;re all about!
                </p>
            </div>
        </section>
        <section className='flex flex-col items-center gap-6 p-8 px-8 text-center md:gap-12 md:flex-row md:text-left'>
            <div className='flex-1'>
                <Image src={JudgeImg} alt={"judge"} className='object-cover w-full h-full' />
            </div>
            <div className='flex flex-col flex-1 gap-3'>
                <h1 className='text-2xl font-bold md:text-3xl font-clash'>Judging Criteria <br /> <span className='text-primary'>Key attributes</span></h1>
                <div className="flex flex-col gap-4 text-xs">
                    <p className='max-w-md text-sm'><span className='text-tertiary'>Innovation and Creativity: </span>Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
                    <p className='max-w-md text-sm'><span className='text-tertiary'>Innovation and Creativity: </span>Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
                    <p className='max-w-md text-sm'><span className='text-tertiary'>Innovation and Creativity: </span>Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
                    <button className='p-3.5 px-10 text-sm rounded grad-to-r w-fit'>Read More</button>

                </div>
            </div>
        </section>
        <section className='flex flex-col items-center gap-6 p-8 px-8 text-center md:gap-12 md:flex-row md:text-left'>
            <div className='flex flex-col flex-1 gap-3'>
                <h1 className='text-2xl font-bold md:text-3xl font-clash'>Frequently Ask  <br /> <span className='text-primary'>Questions</span></h1>
                <p className='max-w-sm text-sm'>Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
                <div className="flex flex-col gap-4 text-xs">
                    <p className='max-w-md text-sm'><span className='text-tertiary'>Innovation and Creativity: </span>Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
                    <p className='max-w-md text-sm'><span className='text-tertiary'>Innovation and Creativity: </span>Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
                    <p className='max-w-md text-sm'><span className='text-tertiary'>Innovation and Creativity: </span>Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
                    <button className='p-3.5 px-10 text-sm rounded grad-to-r w-fit'>Read More</button>

                </div>
            </div>
            <div className='flex-1'>
                <Image src={CasualImg} alt={"casual"} className='object-cover w-full h-full' />
            </div>
        </section>
    </div>
  )
}

export default Home