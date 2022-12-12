import React from "react";
import s1 from "../img/Path 318.png";
import g1 from "../img/Group 2.png";
import g3 from "../img/Group 4.png";
import g2 from "../img/music icon.png";

const Feature = () => {
  return (
    <div className="bg-[#020917] h-[60rem] relative z-[2] pt-36 mt-[-5rem] rounded-b-[70px]">
      <div className="flex flex-col items-center justify-center   ">
        <img src={s1} alt="" className="scale-[.4]" />
        <h1 className="text-2xl">An Amazing App Can Change Your Daily Life</h1>
        <h1 className="text-3xl font-bold">Music Experience</h1>
      </div>
      <div className="flex items-center justify-around w-11/12 mx-auto">
        <div className="flex flex-col justify-center items-center">
          <img src={g1} alt="" className="scale-[0.3] bg-[#081730] px-12 py-10 rounded-[40px] -mb-20" />
          <h1 className="text-2xl font-bold">For Podcast</h1>
          <p className="text-center w-3/4 text-[15px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            ipsum hic illum? Reiciendis repellendus ea explicabo numquam
            asperiores quae eveniet minus excepturi maiores provident, nemo
            cupiditate sequi voluptas magni itaque!<span>Learn More</span>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={g2} alt="" className="scale-[0.3]  bg-[#081730] px-12 py-10 rounded-[40px] -mb-20"/>
          <h1 className="text-2xl font-bold">For Daily Music</h1>
          <p className="text-center w-3/4 text-[15px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            ipsum hic illum? Reiciendis repellendus ea explicabo numquam
            asperiores quae eveniet minus excepturi maiores provident, nemo
            cupiditate sequi voluptas magni itaque!<span>Learn More</span>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={g3} alt="" className="scale-[0.3]  bg-[#081730] px-16 py-10 rounded-[40px] -mb-20"/>
          <h1 className="text-2xl font-bold">For Airtist</h1>
          <p className="text-center w-3/4 text-[15px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            ipsum hic illum? Reiciendis repellendus ea explicabo numquam
            asperiores quae eveniet minus excepturi maiores provident, nemo
            cupiditate sequi voluptas magni itaque!<span>Learn More</span>
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Feature;
