import { useState } from "react";
import './navBar.css'
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SlidebarData";


const Header = ({ statusSidebar, sidebar }) => {
    const showSidebar = (value) => {
        statusSidebar(value)
    }
    console.log("sidebar:", sidebar);

    return (
        <>
            <div className='w-full h-[50px] flex flex-row justify-between items-center m-auto'>
                <div className='w-[119px] h-8 flex flex-row items-center'>
                    <Button startIcon={<MenuIcon />} onClick={showSidebar} className={`!bg-[#04474433] !w-8 !h-8 rounded-[5px] ${sidebar ? "!hidden" : ""}`}></Button>
                    <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                        <ul className="nav-menu-items" onClick={showSidebar}>
                            <li className="navbar-toggle">
                                <a to="#" className="menu-bars">
                                    <AiIcons.AiOutlineClose />
                                </a>
                            </li>

                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <a to={item.path}>
                                            <span>{item.title}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <p className={`font-bold text-base ml-3`}>Programs</p>
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
            </div >

            <hr className='w-full mb-[19px] m-auto' />
        </>
    )
}
export default Header