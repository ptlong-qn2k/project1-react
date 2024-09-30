import React from 'react'
import { useState } from "react";
import { fetchData } from '../Services/UserService';
import 'reactjs-popup/dist/index.css';
import '../Styles/App.css'
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Toastify from '../ComponentPage/Toasttify';


const DeleteRouter = () => {
    const params = useParams();
    const navigate = useNavigate()
    const handleClose1 = () => {
        fetchData.delete(`/products/${params.id}`)
            .then(Toastify);
        navigate("/")
    }

    return (
        <div>
            <Box className="w-[378px] h-full border border-white flex flex-col m-auto relative top-[100px]">
                <h2 className="text-xl absolute  left-[34px] top-[41px]">Delete Station?</h2>
                <p className="text-xs absolute w-[314px] left-[34px] top-[69px]">This action is not reversible, all child-organisation data will be deleted.</p>
                <div className="w-[203px] h-[26px] flex flex-row justify-between absolute left-[145px] top-[132px]">
                    <button className="w-[99px] h-full text-sm bg-[#04474433] text-[#004744] flex items-center justify-center">Cancel</button>
                    <button onClick={handleClose1} className="w-[94px] h-full text-sm bg-[#004744] text-white flex items-center justify-center">Confirm</button>
                </div>
            </Box>
            <ToastContainer />

        </div>

    )
}
export default DeleteRouter