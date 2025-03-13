import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/takeCare.png";
export default function Takecare() {
  return (
    <div
      className="container bg-[#f9f9f9] grid grid-cols-1 
    md:grid-cols-2 py-8 space-y-6 gap-4 text-center "
    >
      <div className="flex justify-center items-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={img}
          alt="img"
          className="w-[350px] md:max-w-[400px] xl:min-w-[600px]
          h-full object-cover 
          "
        />
      </div>
      <div className="space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-center capitalize"
        >
          The Importants To Take Care Of Yourself
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="capitalize "
        >
          The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore
          officia magni reiciendis, architecto, eos, aut asperiores
          reprehenderit quas rerum omnis facilis quam eius doloribus maxime!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero
          inventore assumenda ducimus alias doloribus.
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="primary-btn"
        >
          learn more
        </motion.button>
      </div>
    </div>
  );
}
