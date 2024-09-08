import React from 'react';
import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../Styles/App.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
const CreateStation = ({ open, handleClose }) => {
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

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className="bg-white w-[420px] h-full px-5">
                <div className="w-[377px] h-[26px] flex flex-row mx-auto mb-[22px] mt-7 justify-between items-center mb-10">
                    <button className="text-sm flex flex-row items-center h-[26px] font-bold">Add Station</button>
                    <div className="w-[164px] h-[26px] flex flex-row justify-between text-sm">
                        <Button variant="container" className={`w-[85px] h-[26px] !bg-[#04474433] !lowercase`} >cancel</Button>
                        <button onClick={handleClose} className="w-[72px] h-[26px]  bg-[#004744] text-white flex flex-row items-center justify-center">Save</button>
                    </div>
                </div>
                <div className="w-[377px] h-[50px] bg-[#F1F1F1] rounded-[4px] flex flex-col justify-center m-auto pl-4">
                    <p className="text-xs font-bold w-[76px] h-[16px]">Organization</p>
                    <input type="text" placeholder="Organization Name" className="bg-[#F1F1F1] w-[345px] h-[14px] text-xs" />
                </div>
            </Box>
        </Modal>
    )
}
export default CreateStation