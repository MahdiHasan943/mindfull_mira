"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat  } from 'next/font/google'

const pop = Montserrat({
    weight: '400',
    subsets: ['latin'],
    display:'swap'
})

export const useStickyNav = () => {
    const [stickyClass, setStickyClass] = useState("");
  
    useEffect(() => {
      const handleScroll = () => {
        let windowHeight = window.scrollY;
        setStickyClass(windowHeight > 150 ? "nav" : "");
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return stickyClass;
  };

const Nav = () => {
  //for FadeIn when scroll.
  const stickyClass = useStickyNav();
  // for hambar and menu_drawer.
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [color, setColor] = useState(false);
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");
    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
    };
     const navlinks = [

        {
            "id":1,
           "title": "Home",
            "href":"/"
        },
        {
             "id":2,
            "title": " Meet Mira",
             "href":"about"
        },
      
        
        
        
       
        {
            "id":3,
           "title": " Yoga Classes ",
            "href":"/credentials "
        },
        {
             "id":4,
            "title": "For Yoga Teachers",
             "href":"services"
         },
         {
            "id":4,
           "title": "Retreats",
            "href":"servicess"
        },
        {
            "id":5,
           "title": "Podcast",
            "href":"/blogs"
         },
      
        {
            "id":5,
           "title": "Contact Mira",
            "href":"/blog"
        },
    
    ]

    
    const menu = (
    <React.Fragment>
      {navlinks.map((nav) => (
        <li
          onClick={() => {
            navToggle();
            setColor(nav?.href);
          }}
          key={nav?.id}
        >
          <Link
            href={nav?.href}
            className={
              stickyClass
                ? ` text-[#fff]  px-8 ${
                    color === nav?.href
                    ? " text-[rgb(0,0,0)]      text-[    15px] underline underline-offset-8 decoration-[#000] duration-200 delay-75 ease-linear  py-2 rounded-md px-6"
                    : "text-[rgb(0,0,0)] text-[    15px]       hover:underline underline-offset-8 decoration-[#000] duration-200 delay-75 ease-linear  py-2 rounded-md px-6"
                }
                  }`
                : `${
                    color === nav?.href
                    ? " text-[rgb(0,0,0)]      text-[    15px] underline underline-offset-8 decoration-[#000] duration-200 delay-75 ease-linear  py-2 rounded-md px-6"
                    : "text-[rgb(0,0,0)] text-[    15px]       hover:underline underline-offset-8 decoration-[#000] duration-200 delay-75 ease-linear  py-2 rounded-md px-6"
                }
                  } px-8  `
            }
          >
            {nav.title}
          </Link>
          </li>
      ))}
    </React.Fragment>
  );

  return (
    <nav
      className={`${pop.className} overflow-hidden ${stickyClass} px-4 py-2  bg-[#fff] shadow-none w-full   `}
    >
      <div className="w-full  py-5 nav1">
      <div
        className={`flex w-full items-center   justify-between largeMonitor:justify-between largeMonitor:px-20 largestMonitor:px-[150px] `}
      >
        <div className="flex justify-start    items-center">
          <Link href={"/"}>
              <Image
                onClick={() => { setColor(null) }}
              src={"/loho.png"}
              width={100}
              height={100}
              alt="link711_logo"
            />
          </Link>
        </div>
        <ul className={`${active} `}>
          <Link className="menu_image" href={"/"}>
            <Image
              src={"/images/nav.webp"}
              width={100}
              height={100}
              alt="link711_logo"
            />
          </Link>
          {menu}
        </ul>
      </div>
      {/* for hamburger menu icon */}
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      </div>
      
     
    </nav>
  );
};
export default Nav;
