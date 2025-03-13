import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuData } from "./menuData";
export default function ResponsiveMenu({ isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 20 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <ul className="bg-secondary p-8 text-center rounded-xl m-7 space-y-4 ">
            {menuData.map((item) => (
              <li
                key={item.id}
                className="uppercase font-semibold text-xl text-white"
              >
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
