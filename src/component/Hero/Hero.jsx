import React from "react";
import { motion } from "framer-motion";
import dumbel from "../../assets/dumbel.png";
import { FaPlayCircle } from "react-icons/fa";
import { slideLeft, slideRight } from "../animation/animate";
export default function Hero() {
  return (
    <section className="container overflow-hidden min-h-[650px] grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="flex flex-col items-center justify-center py-12 text-center md:text-left">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={slideRight(0.6)}
          className="capitalize font-semibold text-5xl md:text-6xl leading-relaxed xl:leading-normal"
        >
          gym give you perfect <span className="text-primary">health</span>
        </motion.h2>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={slideRight(1.2)}
          className="text-lg text-center mt-5"
        >
          It is a long established fact that a reader will be by readable
          content of a page when are the best product.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideRight(1.3)}
          className="flex items-center justify-center mt-10 gap-2"
        >
          <button className="primary-btn capitalize">order now</button>
          <button className="flex items-center gap-2  p-2 rounded-md capitalize">
            <FaPlayCircle /> watch now
          </button>
        </motion.div>
      </div>
      <div className="drop-shadow-xl m-auto">
        <motion.img
          initial={{ opacity: 0, x: 300, rotate: 180 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1 }}
          className="w-[350px] md:w-[500px] xl:w-[700px]"
          src={dumbel}
          alt="img"
        />
      </div>
    </section>
  );
}
