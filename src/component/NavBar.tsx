"use client"
import React, { useState } from 'react'
import {motion} from "framer-motion"
import Link from 'next/link'
const variants = {
          open: {opacity : 1 , x : 0},
          closed: {opacity: 0 , x: "-100%"}
}
export const NavBar = () => {
  const [Isopen, setIsopen] = useState<Boolean>(false) 

  return (
    <>    <motion.button className='' onClick={()=>setIsopen(Isopen => !Isopen)}> Menu</motion.button>
          <motion.nav className='absolute z-20 top-0 left-0 bg-purple-500 p-12 rounded-full'
          initial={{backgroundColor : "purple" , width: "50vh" , height: "100vh"}}
          animate={Isopen ? "open" : "closed"}
          variants={variants}
          >
                    <div className="flex flex-row w-full h-full justify-center items-center">
                    <Link href={"/home"}>Home</Link>
                    <Link href={"/Work"}>Home</Link>
                    <Link href={"/About"}>Home</Link>
                    <Link href={"/Contact"}>Home</Link>
                    </div>
                    
          </motion.nav>
    </>
  )
}
