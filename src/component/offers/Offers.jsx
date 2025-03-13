import React from "react";
import { FaDumbbell } from "react-icons/fa6";
import { GrYoga } from "react-icons/gr";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { slideLeft } from "../animation/animate";
const offerData = [
  {
    id: 1,
    name: "Fitness Equipments",
    description: "Get the best fitness equipment at affordable prices.",
    icon: <GiGymBag />,
    delay: 0.4,
  },
  {
    id: 2,
    name: "Muscles Equipments",
    description: "Get the best muscles equipment at affordable prices.",
    icon: <FaDumbbell />,
    delay: 0.5,
  },
  {
    id: 3,
    name: "Yoga Equipments",
    description: "It is a long established fact that a reader readable.",
    icon: <GrYoga />,
    delay: 0.6,
  },
];
function Offers() {
  return (
    <section className="container overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-24 gap-8 text-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold">
          what we offer for you
        </h2>
        <p className=" text-gray-600">
          Our gym offers a variety of services to help you achieve your fitness
          goals. We have a state-of-the-art equipment and a team of experienced
          trainers who can help you create a personalized workout plan.
        </p>
      </div>

      {offerData.map((item) => {
        return (
          <motion.div
            variants={slideLeft(item.delay)}
            initial="hidden"
            whileInView="visible"
            className="bg-gray-100 space-y-4 p-6 hover:bg-white
            rounded-xl hover:shadow-[0_0_22px_rgba(0,0,0,0.15)] flex flex-col items-center
            "
            key={item.id}
          >
            <div className="text-4xl ">{item.icon}</div>
            <p className="text-lg font-bold">{item.name}</p>
            <p>{item.description}</p>
          </motion.div>
        );
      })}
    </section>
  );
}

export default Offers;
