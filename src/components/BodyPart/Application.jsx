import React, { useRef } from 'react'
import { IoIosPhonePortrait } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { GiProcessor } from "react-icons/gi";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Application = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        gsap.from('.left',{
            scrollTrigger:{
                trigger:'.left',
                scrub:3,
                start:"-30% 70%",
                end:'80% center',
            duration:0.5,
            ease:'power1.in',
                
            },
            x:-500,
        })

        gsap.from('.right',{
            scrollTrigger:{
                trigger:'.right',
                scrub:3,
                start:"-30% 70%",
                end:'80% center',
            duration:0.5,
            ease:'power1.in',
                
            },
            x:1000,
        })
    })
    return (
        <>
            <div className=' py-20 flex flex-col justify-center gap-5 items-center '>
                <h1 className='text-3xl font-bold '>OUR WALLET APPLICATION</h1>
                <p className='px-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
            </div>

            <div className=' grid md:grid-cols-2 grid-cols-1 px-32 '>
                <div className='  px-10 flex flex-col gap-10 my-auto left '>
                    <div className='flex gap-7 justify-center items-center'>
                       <div > <div className='border-[#FE5398] hover:bg-[#33007F] hover:text-white transition-all rounded-full h-32 w-32 border flex justify-center items-center '>
                        <IoIosPhonePortrait size={100}/></div></div>
                        <div><h1 className='font-bold text-xl my-3 text-white'>Powerfull Mobile and Online App</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quidem in at omnis voluptates magnam mollitia nobis unde sint neque?</p>
                        </div>
                    </div>
                    <div className='flex gap-7 justify-center items-center'>
                       <div > <div className='border-[#FE5398] hover:bg-[#33007F] hover:text-white transition-all rounded-full h-32 w-32 border flex justify-center items-center '>
                        <GiProcessor size={100}/></div></div>
                        <div><h1 className='font-bold text-xl my-3 text-white'>Brings more Transparency and Speed</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quidem in at omnis voluptates magnam mollitia nobis unde sint neque?</p>
                        </div>
                    </div>
                    <div className='flex gap-7 justify-center items-center'>
                       <div > <div className='border-[#FE5398] hover:bg-[#33007F] hover:text-white transition-all rounded-full h-32 w-32 border flex justify-center items-center '>
                        <CiSettings size={100}/></div></div>
                        <div><h1 className='font-bold text-xl my-3 text-white'>Special for Multiple Use Capabilities</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quidem in at omnis voluptates magnam mollitia nobis unde sint neque?</p>
                        </div>
                    </div>
                    
                </div>
                <div className='p-3'>
                    <div className='bg-[url("./src/assets/rings-bg.png")] bg-no-repeat flex '>
                        <img src="./src/assets/phone.png" className='w-4/3 h-4/3 mx-28 right' alt="" />
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center h-screen'>
            <div style={{background: `linear-gradient(90deg, #5E60FE, #C349B7 , #EB5C68)`}} className='h-auto lg:py-20 w-[70vw] rounded-md grid grid-cols-1 md:grid-cols-2 items-center px-10 '>
            <div>
                <img src="./src/assets/cash.png" height={300} width={300} alt="" />
            </div>
            <div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl uppercase font-bold'>Dont missout the updates</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <input type="text" placeholder='Enter your email' className='outline-none p-3 bg-transparent border-b  placeholder:text-gray-200' />
                    <div className='my-5'><input type="Submit" className='border bg-slate-50 text-black px-5 py-1 rounded'  /></div>
                </div>
                <div className='icons flex gap-4 py-4'>
                    <FaFacebookSquare size={30}/>
                    <FaSquareTwitter size={30}/>
                    <FaInstagramSquare size={30}/>
                </div>
            </div>
            </div>
            </div>

        </>
    )
}

export default Application