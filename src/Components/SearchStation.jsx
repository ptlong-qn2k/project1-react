import { useState } from "react";
import '../App.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Button } from "@mui/material";
import SearchIcon from "../assets/Icon/search";
const SearchStation = ({ dataSearch }) => {
    const searchButton = () => {
        dataSearch(document.getElementById("search").value)
    }


    return (
        <>
            <div className='w-full flex flex-row justify-between items-center m-auto mb-[19px] '>
                <div className='w-[294px] h-8 flex flex-row justify-between'>
                    <div className='w-[202px] h-8 border border-solid border-[#D7D7D7] rounded-[5px] flex flex-row  items-center' >
                        <div className='w-[119px] h-4 ml-2 flex flex-row justify-between'>
                            <img src="public/session2/search.png" alt="" className='w-4 h-4 mr-[7px]' />
                            <input id="search" type="text" placeholder='search programs' className='text-xs text-[#747474]' />
                        </div>

                    </div>
                    <Button onClick={searchButton} variant="container" startIcon={<SearchIcon />} className="!bg-[#04474433]">Stations</Button>
                    {/* <div className="w-[85px] h-8' bg-[#04474433] rounded-[5px] flex flex-row items-center justify-center">
                        <div className='w-[69px] h-4 flex flex-row justify-between items-center' >
                            <img src="public/session2/filter.png" alt="" className='w-4 h-4' />
                            <p className='text-xs text-black'>Stations</p>
                        </div>
                    </div> */}
                </div>
                <Popup className='w-full h-full m-auto'
                    trigger={
                        <div className='w-[103px] cursor-pointer h-8 rounded-[5px] bg-[#004744] flex flex-row justify-center items-center'>
                            <div className='w-[87px] h-4 flex flex-row justify-between items-center'>
                                <img src="public/session2/plus.png" alt="" className='w-4 h-4' />
                                <p className='text-xs text-white'>Add Station</p>
                            </div>

                        </div>}
                    position={"left bottom"}
                >
                    <>
                        <div className="w-[377px] h-[26px] flex flex-row mx-auto mb-[22px] mt-7 justify-between">
                            <p className="text-sm my-auto">Add Station</p>
                            <div className="w-[164px] h-[26px] flex flex-row justify-between text-sm">
                                <Button variant="container" >cancel</Button>
                                <button className="w-[72px] h-[26px]  bg-[#004744] text-white flex flex-row items-center justify-center">Save</button>
                            </div>
                        </div>
                        <div className="w-[377px] h-[50px] bg-[#F1F1F1] rounded-[4px] flex flex-col justify-center m-auto pl-4">
                            <p className="text-xs font-bold w-[76px] h-[16px]">Organization</p>
                            <input type="text" placeholder="Organization Name" className="bg-[#F1F1F1] w-[345px] h-[14px] text-xs" />
                        </div>
                    </>

                </Popup>

            </div >
        </>
    )
}
export default SearchStation