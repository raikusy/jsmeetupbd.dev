"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Facebook, Youtube } from "lucide-react";
import Image from "next/image";
import { useTypewriter } from "react-simple-typewriter";

const ComingSoon = () => {
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    whileHover: { scale: 1.1 },
  };
  const [text] = useTypewriter({
    words: ["Coming Soon..", "April, 2024!!"],
    loop: 0,
  });

  return (
    <>
      <motion.div
        className="logo"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/logo.png"
          alt="Javascript Meetup Bangladesh Logo"
          width={200}
          height={200}
        />
      </motion.div>
      <motion.h1
        className="text-black text-6xl"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        Javascript Meetup Bangladesh
      </motion.h1>

      <motion.h3 className="text-3xl text-blue-700 font-bold">{text}</motion.h3>

      <motion.div
        className="flex mt-16"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <a
          href="https://facebook.com/jsmeetupbd"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Facebook size={48} color="black" />
        </a>
        <a
          href="https://www.youtube.com/@JSMeetupBD"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-8 hover:scale-110 transition-transform"
        >
          <Youtube />
        </a>
        <a
          href="mailto:jsmeetupbd@gmail.com"
          className="hover:scale-110 transition-transform"
        >
          <Mail />
        </a>
      </motion.div>
    </>
  );
};

export default ComingSoon;
