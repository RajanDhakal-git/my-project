import React from 'react'
import Card from '../Card'
import Button from '../Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Application from './Application'
const MinContent = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        gsap.to('.leftpart',{
            x:-50,
            scrollTrigger:{
                trigger:'.leftpart',
                scrub:5
            }
        })

        gsap.to('.rightpart',{
            x:80,
            scrollTrigger:{
                trigger:'.rightpart',
                scrub:5
            }
        })
    })
    return (
        <div className='text-white '>
            <div className='px-20 flex flex-col gap-10 text-center'>
                <h1 className='text-5xl font-bold'>OUR CORE SERVICES</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, reiciendis.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-5 text-center'>
                <Card img={"./src/assets/1.png"} title={"Smart Trading Modules"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum."} />
                <Card img={"./src/assets/2.png"} title={"Adaptive Social Assistant"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum."} />
                <Card img={"./src/assets/4.png"} title={"Analyzer of the News with powerful AII"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum."} />
                <Card img={"./src/assets/5.png"} title={"Exchange Order Management"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum."} />
                <Card img={"./src/assets/6.png"} title={"Module of Price Notification"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum."} />
                <Card img={"./src/assets/3.png"} title={"Crypto Trading Platform"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum."} />
            </div>

            <div className='grid grid-cols-1  md:grid-cols-2 lg:px-32 py-10 mt-32  px-20 gap-5'>
                <div className='leftpart'>
                    <img src="./src/assets/about1.png" alt="about1" />
                </div>
                <div className=' rightpart
                 flex flex-col gap-5'>
                   <h1 className='font-bold text-3xl'> We complete every project with extra care as customer need.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>

                   <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magni, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. Fugit!</p>

                    <div className='mr-auto '>
                        <Button value={"Read more"}/>
                    </div>
                </div>
            </div>

            <div className='bg-[#1c1c1c] '><Application/></div>
        </div>
    )
}

export default MinContent