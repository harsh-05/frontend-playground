import {easeIn, easeInOut, motion, useAnimation, useInView} from 'motion/react'
import { useEffect, useRef } from 'react';


interface Prop  {
    children: React.ReactNode,
    width?: "w-fit" | "w-full",
    backgroundColor: string
}
function RevealAnimation({ children, width = 'w-fit', backgroundColor }: Prop) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const maincontrol = useAnimation();
    const slideControl = useAnimation();


    useEffect(() => {
        if (isInView) {
            maincontrol.start("visible");
            slideControl.start("visible");
        }
    }, [isInView])
    return <div ref={ref} className={`relative ${width}`}>
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0}

            }}
            initial='hidden'
            animate={maincontrol}
            transition={{
                delay: 0.25,
                duration: 0.5,
                ease: easeInOut
            }}
            className=''>
            {children}
        </motion.div>
        <motion.div
            variants={{
                hidden: { left: 0 },
                visible: { left: "100%"}
            }}
            initial="hidden"
            animate={slideControl}
            transition={{duration: 0.5, ease: easeIn}}
            className={`absolute  inset-0 ${backgroundColor} z-20`} >

        </motion.div>
    </div>;
}


export function RevealTextPage() {
   return (
     <div className=" bg-neutral-50 flex flex-col gap-10 justify-center items-center">
       <RevealAnimation backgroundColor="bg-yellow-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-red-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-green-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-purple-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-blue-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-yellow-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-red-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-green-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-purple-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-blue-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-yellow-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-red-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-green-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-purple-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-blue-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-yellow-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-red-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-green-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-purple-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-blue-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-yellow-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-red-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-green-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-purple-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
       <RevealAnimation backgroundColor="bg-blue-100">
         <h1 className="text-9xl">Revealed text</h1>
       </RevealAnimation>
     </div>
   );
}



