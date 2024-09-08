import React from 'react';
import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../Styles/App.css'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const ModalEdit = ({ handleClose2, open2 }) => {
    const style = {
        position: 'absolute',
        top: '0',
        right: '0px',
        // transform: 'translate(-50%, -50%)',
        width: 420,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        // boxShadow: 0,
    };

    const hanleEdit = () => {
        console.log("ban da nhan vao nut save");

    }
    return (
        <Modal
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            slotProps={{
                backdrop: {
                    sx: {
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    },
                },
            }}
        >
            <Box sx={style} className="w-full h-full bg-white ">
                <div className="w-[377px] h-[26px] flex flex-row mx-auto mb-[22px] mt-7 justify-between">
                    <p className="text-sm my-auto">Add Station</p>
                    <div className="w-[164px] h-[26px] flex flex-row justify-between text-sm">
                        <button className=" w-[85px] h-[26px]  bg-[#04474433] text-[#004744] flex flex-row items-center justify-center">Cancel</button>
                        <button onClick={handleClose2} className="w-[72px] h-[26px]  bg-[#004744] text-white flex flex-row items-center justify-center">Save</button>
                    </div>
                </div>
                <div className="w-[377px] h-[50px] bg-[#F1F1F1] rounded-[4px] flex flex-col justify-center m-auto mb-2 pl-4">
                    <p className="text-xs font-bold w-[76px] h-[16px]">Organization</p>
                    <input type="text" placeholder='NHAP TEN BAN' className="bg-[#F1F1F1] w-[345px] h-[14px] text-xs" />
                </div>
                <div className="w-[377px] h-[100px] bg-[#F1F1F1] rounded-[8px] flex flex-col pl-4 pt-2 m-auto relative">
                    <p className="text-xs font-bold w-[76px] h-[16px]">Description</p>
                    <p className="text-xs  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <img src="public/Station/strech.png" alt="" className="w-4 h-4 absolute left-[357px] top-[80px]" />
                </div>
            </Box>
        </Modal>
    )
}

export default ModalEdit
