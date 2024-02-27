import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data, change, reference }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{scale:1.2}}
        dragElastic={0.2}
        dragTransition={{bounceStiffness:100,bounceDamping:10}}
        className=" relative w-56 h-64 bg-sky-100/20 rounded-[30px] text-white p-6 overflow-hidden m-4"
      >
        <FaRegFileAlt />
        <p className="text-xs mt-5 font-semibold leading-tight">{data.desc}</p>
        <div className="footer absolute bottom-0 w-full  left-0 ">
          <div className="flex items-center justify-between mx-7 py-3 text-xs ">
            <h5>{data.fileSize}</h5>
            {data.close ? (
              <IoIosCloseCircleOutline onClick={change} size=".9em" />
            ) : (
              <AiOutlineDownload />
            )}
          </div>
          {data.tag.isOpen ? (
            <div
              className={` h-12 w-full flex items-center justify-center ${
                data.tag.tagColor == "blue" ? "bg-blue-500" : "bg-green-500"
              } text-xs cursor-pointer`}
            >
              <h5>Download Now</h5>
            </div>
          ) : null}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
