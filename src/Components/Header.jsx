import { useState } from "react";
import '../App.css'

const Header = () => {
    return (
        <>
            <div className='w-full h-[50px] flex flex-row justify-between items-center m-auto'>
                <div className='w-[119px] h-8 flex flex-row items-center justify-between'>
                    <div className='w-8 h-8 rounded-[5px] bg-[#04474433]'>
                        <img src="public/session1/hamburger-button.png" alt="" />
                    </div>
                    <p className='font-bold text-base'>Programs</p>
                </div>
                <div className='w-[150px] h-[29px] flex flex-row justify-between'>
                    <div className='w-[113px] h-[29px] flex flex-col items-end justify-center leading-3 text-[12px]'>
                        <p className='text-[#004744]'>Sam Rabera </p>
                        <p className='text-[#5C5C5C]'>Oraganisation Name</p>
                    </div>
                    <div className="w-[29px] h-[29px] " >
                        <img src="public/session1/Group 659.png" alt="" />
                    </div>
                </div>
            </div>

            <hr className='w-full mb-[19px] m-auto' />
        </>
    )
}
export default Header