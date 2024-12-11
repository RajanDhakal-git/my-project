import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { useEffect } from 'react'

const Card = ({img,title,text}) => {
      
  useGSAP(()=>{
    gsap.to('.imgani',{
        y:-20,
        repeat:-1,
        duration:0.7,
        yoyo:true
    })
})
   
    
  return (
    <div className='mt-4 border bg-[#1c1c1c] rounded-md flex-1 h-[40vh] p-10 '>
       <div className='mx-auto py-3 flex justify-center imgani'> <img src={img} alt="alt" /></div>
        <p className='font-semibold text-2xl mb-3'>{title}</p>
        <div>{text}</div>
    </div>
  )
}

export default Card