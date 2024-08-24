"use client"
import"./customCSS.css"
import { useEffect, useRef, useState } from "react";
import {items} from "../../public/data"
import {AnimatePresence, motion} from "framer-motion"
import plane from "../../public/plane.png"
import character from "../../public/mainCharacter.png"
import Image from "next/image";
import TypingEffect from "@/component/TypingEffect";
export default function Home() {
  useEffect(() => {
    const cursorCircle = document.querySelector(".cursor-circle") as HTMLElement;

    const handleMouseMove = (e : MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      cursorCircle.style.transform = `translate(${x}px, ${y}px) scale(1)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const constraintsRef = useRef<HTMLDivElement | null>(null)
  const [selectedId, setSelectedId] = useState("")
   return (
    <>
      <div className="w-full h-screen snap-y snap-mandatory overflow-y-scroll scrollbar-hide">
        <div className="snap-start relative group h-full w-full flex items-center justify-center  text-white text-2xl font-bold overflow-hidden">
        <motion.div
        className="absolute top-0 left-0 w-screen "
        initial={{ x: 20 , y: '100vh' , rotate: "0deg" }} // Start off-screen
        animate={{ x: "100vw", y: 0 ,rotate: "0deg"}} // Animate to on-screen position
        transition={{ duration: 5, ease: 'linear' }} // Adjust duration as needed
          >
        <Image src={plane} alt="farouk pic" width={500} height={500} className="transform scale-x-[-1]"/>
          </motion.div>
        <motion.div
        className="absolute top-0 left-0 w-screen"
        initial={{ x: '100vw', y: '130vh',rotate: "0deg" }} // Start off-screen
        animate={{ x: 0 , y: -60 , rotate: "6deg"}} // Animate to on-screen position
        transition={{ duration: 7, ease: 'linear' }} // Adjust duration as needed
          >
        <Image src={plane} alt="farouk pic" width={300} height={300} />
          </motion.div>
        <motion.div
        className="absolute top-0 left-0 w-screen"
        initial={{ x: '100vw', y: '100vh',rotate: "0deg" }} // Start off-screen
        animate={{ x:"50vw" , y: "30vh" , rotate: "6deg"}} // Animate to on-screen position
        transition={{ duration: 5, ease: 'linear' }} // Adjust duration as needed
          >
        <Image src={plane} alt="farouk pic" width={300} height={300} className="transform lg:w-[700px]  scale-x-[1]"/>
          </motion.div>
        
        <div className="flex flex-col justify-end p-2">
        <h1 className="font-black md:text-9xl lg:text-[220px] text-8xl">
        <TypingEffect text="Hi i am Farouk" speed={150}/>
        </h1>
        
        <h1 className="md:text-4xl lg:text-7xl">a humble video editor</h1>
        </div>
        
        <div className="cursor-circle"></div>
      </div>

        
      <motion.div className={"snap-start bg-white flex justify-start items-center flex-col h-full w-full"} ref={constraintsRef}>
        <motion.div
          className=" h-[100px] w-[400px] flex-center"
          drag
          dragConstraints={constraintsRef}
        >
        <h1 className="text-6xl font-black text-center text-black">Biography</h1>
        </motion.div>
        <motion.div
          className="bg-black rounded-xl h-[50vh] w-[360px] flex justify-start items-center flex-col"
          drag
          dragConstraints={constraintsRef}
        >
          <Image src={character} alt="character" className=" top-1/2 left-1/2 border-white border-4 content-center rounded-full w-[130px] h-[130px]"/>
          <h1 className="text-3xl font-black text-center mx-2 w-full ">Maddani Farouk</h1>
          <h1 className="text-xl font-medium text-center mx-2 w-full ">&quot; I believe in the power of Decipline&quot;</h1>
          <p className="text-xl font-medium text-center mx-2 w-full ">LoremIpsumDelore lorem ipsum The Brown Fox jumped over the box for several times before he landed on his  </p>
          <p className="text-xl font-medium text-center mx-2 w-full ">LoremIpsumDelore lorem ipsum The Brown Fox jumped over the box for several times before he landed on his feets </p>
        </motion.div>
        <motion.div
          className="text-black h-[100px] w-[210px] flex-center"
          drag
          dragConstraints={constraintsRef}
        >
        <h1 className="text-xl mx-2 w-full text-center font-bold ">Tech i use on the duty</h1>
        </motion.div>
        <motion.div
          className="border-black mb-4 p-2 border-2 rounded-xl h-[68px] w-[360px] flex justify-around"
          drag
          dragConstraints={constraintsRef}
        >
          <div className="bg-black rounded-xl w-[64px] h-[64px] flex-center"></div>
          <div className="bg-black rounded-xl w-[64px] h-[64px] flex-center"></div>
          <div className="bg-black rounded-xl w-[64px] h-[64px] flex-center"></div>
        </motion.div>
        <motion.div
          className="border-black my-4 p-2 border-2 rounded-xl h-[68px] w-[360px] flex justify-around"
          drag
          dragConstraints={constraintsRef}
        >
          <div className="bg-black rounded-xl w-[64px] h-[64px] flex-center"></div>
          <div className="bg-black rounded-xl w-[64px] h-[64px] flex-center"></div>
          <div className="bg-black rounded-xl w-[64px] h-[64px] flex-center"></div>
        </motion.div>
        <motion.div
          className="border-black my-4 p-2 border-2 rounded-xl h-[68px] w-[360px] flex justify-around"
          drag
          dragConstraints={constraintsRef}
        >
          <div className="bg-black rounded-xl w-[64px] h-[64px] flex-center"></div>
          <div className="bg-black rounded-xl w-[64px] h-[64px] flex-center"></div>
          <div className="bg-black rounded-xl w-[64px] h-[64px] flex-center"></div>
        </motion.div>
      </motion.div>


      <div className=" snap-start p-6 bg-black min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layoutId={item.id.toString()}
              onClick={() => setSelectedId(item.id)}
              className="p-4 bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <motion.h5 className="text-sm font-semibold text-gray-500">
                {item.subtitle}
              </motion.h5>
              <motion.h2 className="text-xl font-bold text-gray-800 mt-2">
                {item.title}
              </motion.h2>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId.toString()}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            >
              {items
                .filter((item) => item.id === selectedId)
                .map((item) => (
                  <motion.div
                    key={item.id}
                    className="p-6 bg-white rounded-lg shadow-lg w-full h-1/2 xl:h-2/3 xl:w-2/3 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <iframe className="w-full h-full" src={item.link} title="YouTube video player" allowFullScreen={true}  allow="fullscreen , accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
                    <motion.h5 className="text-sm font-semibold bg-white text-gray-500">
                      {item.subtitle}
                    </motion.h5>
                    <motion.h2 className="text-2xl font-bold bg-white text-gray-800 mt-2">
                      {item.title}
                    </motion.h2>
                    <motion.button
                      onClick={() => setSelectedId("")}
                      className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      Close
                    </motion.button>
                  </motion.div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </div>
    </>
  )
}
