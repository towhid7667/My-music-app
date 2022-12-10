import React from 'react';
import p1 from './../img/p 1.png'
import p2 from './../img/p 2.png'
import p3 from './../img/p 3.png'
import p4 from './../img/p 4.png'

const MainBanner = () => {
    return (
        <div className='bg-[#232A4E] flex items-center justify-around pt-8  relative z-[3] h-[35rem] rounded-b-[70px]'>
            <div className='w-1/2'>
            <h1 className='text-7xl text-gray-400'>Experience The</h1>
            <h1 className='text-7xl font-bold'>Best quality Music</h1>
            <p className='w-3/4 my-5 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laboriosam error ab rem, dicta cupiditate voluptatem atque deleniti quos ducimus!</p>
            </div>
            <div className='px-32'>
                <img src={p1} alt=""  className=' absolute -top-10 right-20 scale-75'/>
                <img src={p2} alt="" className='absolute -bottom-[0.1rem] right-40 scale-[.71] '/>
                <img src={p3} alt="" className='absolute -bottom-[9rem] right-[14.75rem] scale-[.25]'/>
                <img src={p4} alt="" className='absolute -bottom-[12.3rem] right-[11.75rem] scale-[.25]'/>
                
            </div>
        </div>
    );
};

export default MainBanner;