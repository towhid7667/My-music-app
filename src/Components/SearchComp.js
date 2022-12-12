import React from 'react';
import p1 from '../img/d1.png'
import p2 from '../img/d2.png'
import p3 from '../img/d3.png'
import p4 from '../img/d4.png'
import bg from '../img/backgraphics.png'
import s from '../img/search.png'
import s2 from '../img/Path 318.png'

const SearchComp = () => {
    return (
        <div className='flex relative justify-around items-center bg-[#081730] h-[50rem] z-[1] pt-36 mt-[-5rem]'>
            <div className='w-1/2 px-32'>
            <img src={bg} alt="" className='absolute top-[20rem] -left-[5rem] w-[45rem]'/>
                <img src={p1} alt="" className='absolute top-[10rem] left-[12rem] w-[16rem]'/>
                <img src={p2} alt=""  className='absolute top-[17rem] left-[14rem] w-[9rem]'/>
                <img src={p3} alt="" className='absolute top-[17rem] left-[24rem]  w-[9rem]'/>
                <img src={p4} alt="" className='absolute top-[33.5rem] left-[7rem] w-[17rem]'/>
                
            </div>
            <div className='w-1/2'>
                <div className='flex items-center gap-3'>
                    <input type="text" className='px-28 bg-[#020917] text-[#FFFFFF] rounded-lg py-3' placeholder='Enter Keyword or URL'/>
                    <button className='w-11 bg-gradient-to-r from-purple-500 to-red-500 p-3 rounded-lg'><img src={s} alt="" /></button>
                </div>
                <img src={s2} alt="" className='w-20 mt-4'/>
                <h1 className='text-3xl text-gray-400'>search Music By</h1>
            <h1 className='text-3xl font-bold'>Name Or Direct URL</h1>
            <p className='w-3/4 my-5 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laboriosam error ab rem, dicta cupiditate voluptatem atque deleniti quos ducimus!</p>
            </div>
        </div>
    );
};

export default SearchComp;