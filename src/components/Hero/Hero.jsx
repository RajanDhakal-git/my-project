import React from 'react'
import Navbar from './Navbar'
import Button from '../Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {
  useGSAP(()=>{
    gsap.to('.main',{
      opacity:1,
      
      duration:0.8,
      y:-10
    })
  })
  return (
    <>
    <div className='h-screen  bg-[url("./src/assets/bg-5.png")]  bg-center w-full '>
       <Navbar/>
     <div className='flex px-10 lg:px-32 main opacity-0 '>
     <div className='px-10 text-white md:w-1/2'>
        <div className='flex items-center text-gray-400 gap-3  rounded-full px-10 mt-32 py-2 bg-[rgba(255,255,255,0.2)]'>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="100%" y2="0%" id="a"><stop stop-color="#2FCACA" offset="0%"/><stop stop-color="#0ACAA7" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><ellipse fill="url(#a)" cx="11.613" cy="11.619" rx="11.613" ry="11.619"/><path d="M11.082 18.486a.363.363 0 0 1-.114-.28V17.08c-.781-.075-1.451-.263-2.01-.563-.558-.3-.981-.666-1.269-1.1a2.693 2.693 0 0 1-.463-1.39.32.32 0 0 1 .105-.233.346.346 0 0 1 .253-.104h1.464c.13 0 .23.024.3.072.071.048.14.126.204.233.12.364.372.67.757.916s.914.37 1.586.37c.749 0 1.315-.127 1.7-.378.385-.252.578-.597.578-1.037a.976.976 0 0 0-.293-.723c-.195-.192-.49-.361-.887-.506a21.435 21.435 0 0 0-1.749-.522c-1.28-.3-2.218-.696-2.814-1.189-.597-.492-.895-1.2-.895-2.12 0-.836.306-1.543.919-2.121.613-.579 1.45-.932 2.514-1.06v-1.11c0-.117.038-.21.114-.28a.395.395 0 0 1 .276-.105h1.009c.12 0 .214.035.285.105.07.07.105.163.105.28v1.142c.705.096 1.31.302 1.814.618.505.316.89.683 1.156 1.1.265.418.41.825.43 1.222a.333.333 0 0 1-.342.337H14.27c-.227 0-.385-.096-.471-.29-.065-.342-.28-.628-.643-.859-.363-.23-.816-.345-1.359-.345-.596 0-1.065.112-1.407.337-.342.225-.512.552-.512.98 0 .29.084.53.252.723.168.193.44.365.813.514.375.15.909.311 1.603.482.965.215 1.733.456 2.302.723.57.268.99.606 1.261 1.013.271.407.407.926.407 1.558 0 .932-.34 1.687-1.017 2.265-.678.579-1.592.927-2.742 1.045v1.124a.377.377 0 0 1-.105.281.388.388 0 0 1-.285.105h-1.009a.395.395 0 0 1-.276-.105z" fill="#060E49"/></g></svg> <p> Discover a new ways to enjoy your World!</p> </div>
        <div className='text-4xl mx-2 mt-10 font-bold'>
        Get Most Benefits of ICO, crypto & Forex Trading.

        </div>
        <div className='mt-10'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam ad voluptates voluptate sint totam minus eligendi, beatae ex ullam!</p>
        </div>
        <div className='flex gap-5 '>
          <Button value={"Join-pre sell"}/>
          <Button value={"whitepaper"}/>
        </div>
       </div>
     </div>
     <div ></div>
    </div>
    </>
  )
}

export default Hero