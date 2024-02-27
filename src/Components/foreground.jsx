import React, { useRef, useState }from "react";
import Card from "./Card";

const foreground = () => {
    const ref = useRef(null)
    const [ture,setTrue]=useState(true)
    function change(){
        setTrue(!ture)
        console.log(ture)
    }
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: ture, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: ture, tagTitle: "Download Now", tagColor: "blue" },},
    {
      desc: "This is working with the data.",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: ture, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div ref = {ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap">
      {data.map((item) => (
        <Card data={item } change={change} reference={ref} />
      ))}
    </div>
  );
};

export default foreground;
