import { useState } from "react";
import '../Styles/App.css'
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../Components/SlidebarData"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";

const Header = ({ statusSidebar, sidebar }) => {
    const showSidebar = (value) => {
        statusSidebar(value)
    }
    let navigate = useNavigate();
    const useParams = () => {
        navigate("/products")
    }

    return (
        <>
            <div className='w-full h-[50px] flex flex-row justify-between items-center m-auto'>
                <div className='w-[full] h-8 flex flex-row items-center'>
                    <Button startIcon={<MenuIcon fontSize="large" />} onClick={showSidebar} className={`!bg-[#07080833] !pl-4 !w-8 !px-auto !h-8 rounded-[5px] !mx-auto ${sidebar ? "!hidden" : ""}`}></Button>
                    <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                        <ul className="nav-menu-items" onClick={showSidebar}>
                            <li className="navbar-toggle">
                                <a to="#" className="menu-bars">
                                    <AiIcons.AiOutlineClose />
                                </a>
                            </li>

                            {SidebarData.map((item, index) => {
                                return (
                                    <div key={index} className={item.cName}>
                                        <Link to={item.path} className="flex flex-row items-center">
                                            {item.icon}
                                            <span className="ml-5">{item.title}</span>
                                        </Link>
                                    </div>
                                );
                            })}
                        </ul>
                    </nav>
                    <p onClick={useParams} className={`font-bold text-base ml-3 cursor-pointer`}>Programs</p>
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