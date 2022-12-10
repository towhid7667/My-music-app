import React from 'react';
import p1 from './../img/p 1.png'
import p2 from './../img/p 2.png'
import p3 from './../img/p 3.png'
import p4 from './../img/p 4.png'

const MainBanner = () => {
    return (
        <div className='bg-[#232A4E] flex items-center justify-around py-8 h-screen relative rounded-b-3xl'>
            <div>

            </div>
            <div>
                <img src={p1} alt=""  className=' absolute -top-10 right-20 scale-75'/>
                <img src={p2} alt="" className='absolute bottom-[5.4rem] right-40 scale-[.71] '/>
                <img src={p3} alt="" className='absolute -bottom-[3.5rem] right-[14.75rem] scale-[.25]'/>
                <img src={p4} alt="" className='absolute -bottom-[6.9rem] right-[11.75rem] scale-[.25]'/>
                
            </div>
        </div>
    );
};

export default MainBanner;