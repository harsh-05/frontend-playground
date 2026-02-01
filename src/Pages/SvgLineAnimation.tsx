import { motion } from 'motion/react'
export function SvgLineAnimation() {
  return (
    <div className="h-screen bg-[#1C3D03] flex justify-center items-center text-xl sm:text-3xl md:text-5xl lg:text-7xl text-[#E4E159]">
      <h1 className="m-2">
        Using{" "}
        <span className="relative inline-block">
          Tailwind + Motion
          <svg
            className="absolute lg:-top-13  md:-top-10 sm:-top-4 -top-3"
            viewBox="0 0 562 127"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
              d="M354.378 37.1242C346.597 -2.44351 33.6343 49.2988 8.73524 69.0827C-6.7319 81.3722 -0.0473162 123.869 27.9641 123.869C55.9755 123.869 514.497 129.956 540.952 119.303C566.573 108.987 564.295 79.7355 550.289 64.5172C536.284 49.2988 512.675 40.1476 471.478 44.7334C430.463 49.2988 343.87 50.8207 301.853 44.7334C259.836 38.646 239.606 8.20932 222.488 0.600159"
              stroke="red"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </span>{" "}
        to showcase the skills
      </h1>
    </div>
  );
}


 <svg
   width="562"
   height="127"
   viewBox="0 0 562 127"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
 >
   <path
     d="M354.378 37.1242C346.597 -2.44351 33.6343 49.2988 8.73524 69.0827C-6.7319 81.3722 -0.0473162 123.869 27.9641 123.869C55.9755 123.869 514.497 129.956 540.952 119.303C566.573 108.987 564.295 79.7355 550.289 64.5172C536.284 49.2988 512.675 40.1476 471.478 44.7334C430.463 49.2988 343.87 50.8207 301.853 44.7334C259.836 38.646 239.606 8.20932 222.488 0.600159"
     stroke="red"
     stroke-width="2"
     stroke-linecap="round"
   />
 </svg>;


  // className = "absolute lg:-top-13  md:-top-10 sm:-top-4 -top-3";