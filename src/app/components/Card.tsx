"use client";
import React from "react";
import styles from "../letter/letter.module.css";
import { Birthstone_Bounce } from "next/font/google";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";


const birthstone = Birthstone_Bounce({ weight: ["400"], subsets: ["latin"] });

export default function Card() {
  return (
    <main className={styles.container}>
      <div className="border rounded-full p-1 bg-green-600 hover:bg-green-900"><Link href="/"><IoHomeOutline size={35} /></Link></div>
      <div className={styles.main}>
        <div className={styles.birthdayCard}>
          <div className={styles.cardFront}>
            <h3 className={styles.happy}>HAPPY GIRLFRIEND DAY, BABY!</h3>
            <div className={styles.balloons}>
              <div className={styles.balloonOne} />
              <div className={styles.balloonTwo} />
              <div className={styles.balloonThree} />
              <div className={styles.balloonFour} />
            </div>
          </div>
          <div className={styles.cardInside}>
            <h3 className={styles.back}>Happy Girlfriend Day!</h3>
            <p className={styles.para}>Dear Aduke,</p>
            <p className={styles.para}>
              On this day, I want to let you know you mean so much to me Juli Juli. The
              days are much brighter (not as hell🥶) and your laughter makes every night
              special.</p>
              <p className={styles.para}>
                Thank you for the happiness, joy, the reelsg and the ever-interesting gists;
                I can&apos;t wait to start our life and grow together with you  
              </p>
              <p className={styles.para}>
              I love you more than the distance between us and whatever life
              holds 💖
            </p>
            <p className={styles.name}>Ayoola</p>
          </div>
        </div>
      </div>
    </main>
  );
}
