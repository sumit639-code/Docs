import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
const Card = () => {
  return (
    <>
      <div className=" relative w-56 h-72 bg-sky-100/20 rounded-[30px] text-white p-6 overflow-hidden">
        <FaRegFileAlt />
        <p className="text-xs mt-5 font-semibold leading-tight">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum et
          maxime sequi nobis hic labore, aspernatur delectus quis nam omnis
          voluptates mollitia obcaecati.
        </p>
        <div className="footer absolute bottom-0 bg-white/20 w-full h-10 left-0 ">
          <div className="flex p-2 items-center justify-between mx-6">
            <h5>.4mb</h5>
            <AiOutlineDownload/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
