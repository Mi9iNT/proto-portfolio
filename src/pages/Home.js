import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Onglets from "../components/Onglets";
import Logo from "../components/Logo";
import Menu from '../components/menu/Menu';
import RS from '../components/reseaux_sociaux/RS';

import { motion } from "framer-motion";
import { Earth } from '../components/Earth';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Home = () => {

    const titleRef = useRef()
    
   
   
    const onLoad = () => {
        
        gsap.timeline({
            onComplete: function () {

                sessionStorage.setItem("AnimateAlreadyPlayed", onLoad);
            }
        })
            .fromTo(".letter",
                {
                    x: -100,
                    opacity: 0,
                },
                {
                    x: -40,
                    opacity: 1,
                    stagger: 0.3,
                    delay: 0.1,
                    duration: 1,
                },
            )
            .to(".title", {
                y: 100,
                scale: 0.5,
            })
            .to(".title", {
                fontFamily: "$font-2",
                delay: 0.2
            })
            .to(".title", {
                fontWeight: "100",
                fontFamily: "$font-1",
                scale: 0.6,
                y: 120,
                delay: 0.2
            })
            .to(window, {
                delay: 0.2,
                duration: 3,
                scrollTo: "#box1",
            })
            .to(window, {
                delay: 0.2,
                duration: 1,
                scrollTo: "#nextSection",
            })
            .to(".title", {
                scale: 1,
                y: 0,
                delay: 0.2,
                duration: 0.2,
            })

    }

    const onLoaded = () => {
        
         gsap.timeline()
             .fromTo(".letter",
                {
                    x: -100,
                    opacity: 0,
                },
                {
                    x: -40,
                    opacity: 1,
                    duration: 0.1,
                 },
                
            )
             .to(window, {
                delay: 0.4,
                duration: 0.5,
                scrollTo: "#box1",
            })

    }

    

    const slideToBottom = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                y: 320,
            },
            {
                y: 100,
                delay: delay || 0.5,
                duration: duration || 0.8,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: "bottom center",
                }
            }
        )
    }


    
    const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
        elem,
        {
        opacity: 0,
        x: -200,
        },
        {
        opacity: 1,
        x: 0,
        delay: delay || 0.2,
        duration: duration || 0.6,
        scrollTrigger: {
            trigger: elem,
            start: "top center",
            end: "bottom center",
        }
        }
    )
    }

    const slideInRight = (elem, delay, duration) => {
    gsap.fromTo(
        elem,
        {
        opacity: 0,
        x: 200,
        },
        {
        opacity: 1,
        x: 0,
        delay: delay || 0.2,
        duration: duration || 0.6,
        scrollTrigger: {
            trigger: elem,
            start: "top center",
            end: "bottom center",
        }
        }
    )
    }    

    const AnimatePlayed = sessionStorage.getItem("AnimateAlreadyPlayed");
    
    useEffect(() => {
        if (!AnimatePlayed) { onLoaded() } else { onLoad()}
    }, [])
    useEffect(() => {
    slideInLeft("#box1")
    }, [])
    useEffect(() => {
    slideInLeft(".logo")
    }, [])
    useEffect(() => {
    slideInRight(".FootCont")
    }, [])
    useEffect(() => {
    slideToBottom("#nextSection")
    }, [])

   

  

    return (
        <motion.div className="main"
        
            
           initial={ { width: 0 } }
            animate={ { width: "100%" } }
            exit={ { x: window.innerWidth, transition: {duration: 0.05  } } }
          
            
        >
            
            <div className='Home' id="firstSection">
                <section className='sectionTitle'>
                    <h1 className='title' ref={titleRef}>
                        <span className='letter'>P</span>
                        <span className='letter'>r</span>
                        <span className='letter'>o</span>
                        <span className='letter'>t</span>
                        <span className='letter'>o</span>
                        <span className='letter'>-</span>
                        <span className='letter'>P</span>
                        <span className='letter'>o</span>
                        <span className='letter'>r</span>
                        <span className='letter'>t</span>
                        <span className='letter'>f</span>
                        <span className='letter'>o</span>
                        <span className='letter'>l</span>
                        <span className='letter'>i</span>
                        <span className='letter'>o</span>
                    </h1>
                </section>   
                  
            <section className="Box" id="nextSection">
                <div className="Box" id="box1">
                    <h2 className='TitleHome1'>Developper Front-End . WebDesigner . Maker . Jammer</h2>
                    <h3 className='TitleHome2'>Juste de quoi m'amuser</h3>
                    <Onglets />
                </div>
            </section>
            
            </div>
            <div className="menu-left">
                <Menu />
                <RS />
            </div>
            <Logo />
        </motion.div>
             
    );
};


    export default Home;