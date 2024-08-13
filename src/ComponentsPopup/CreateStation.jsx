import React from 'react';
import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../App.css'


const CreateStation = () => {
    const [Station, SetStation] = useState()

    return (
        <>
            <div className='w-[400px] h-[200px] mx-auto mt-[100px] border border-solid flex flex-col'>
                <div className="w-[377px] h-[26px] flex flex-row mx-auto mb-[22px] mt-7 justify-between">
                    <p className="text-sm my-auto">Add Station</p>
                    <div className="w-[164px] h-[26px] flex flex-row justify-between text-sm">
                        <button className=" w-[85px] h-[26px]  bg-[#04474433] text-[#004744] flex flex-row items-center justify-center">Cancel</button>
                        <button className="w-[72px] h-[26px]  bg-[#004744] text-white flex flex-row items-center justify-center">Save</button>
                    </div>
                </div>
                <div className="w-[377px] h-[50px] bg-[#F1F1F1] rounded-[4px] flex flex-col justify-center m-auto pl-4">
                    <p className="text-xs font-bold w-[76px] h-[16px]">Organization</p>
                    <input type="text" placeholder="Organization Name" className="bg-[#F1F1F1] w-[345px] h-[14px] text-xs" />
                </div>
            </div>

        </>
    )
}
export default CreateStation