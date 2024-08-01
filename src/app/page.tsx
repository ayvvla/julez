'use client'
import Image from "next/image";
import Link from "next/link";
import titi from "../assets/titi.png";
import tit from "../assets/tit.jpg";
import { Edu_VIC_WA_NT_Beginner, Indie_Flower } from "next/font/google";
import { Snowfall } from "react-snowfall";

const edu = Edu_VIC_WA_NT_Beginner({subsets : ["latin"]})
const indie = Indie_Flower({weight : ["400"] , subsets : ["latin"]})

export default function Home() {
  return (
    
    <main className="h-[100vh] flex justify-center items-center bg-[#ffc2d1] relative">
      <Snowfall
        snowflakeCount={200}
        color="#fff"
        radius={[0.5, 3.0]}
        wind={[0.5,1.0]}
        

      />
      <section className="flex-col">
        <div></div>
        <h1 className={`text-3xl ${edu.className}`}>
          Happy Girlfriend&apos;s day to the best girl in the world{" "}
        </h1>
        <div className={`my-5 flex justify-center gap-10 ${indie.className}`}>
          <button className="px-5 py-4 bg-[#fb6f92] text-[#ffe5ec] rounded-xl hover:bg-[#fb6f79] ">
            <Link href="/flower" >Click for Flower</Link>
          </button>
          <button className="px-5 py-4  bg-[#fb6f92] text-[#ffe5ec] rounded-xl hover:bg-[#fb6f79]  ">
            <Link href="/letter">Click for Letter</Link>
          </button>
        </div>
      </section>

      <div className="absolute top-5">
        <Image
          src={titi}
          width={50}
          height={50}
          alt="titi"
          className="rounded-full mx-[auto] animate-bounce"
        />
      </div>
    </main>
  );
}
