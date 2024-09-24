import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import { fetchData } from '../Services/UserService';
import 'reactjs-popup/dist/index.css';
import '../Styles/App.css'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const ModalEdit = ({ setOpen2, open2, idUpdate }) => {
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
    const [dataEdit, setDataEdit] = useState({ title: "", sku: "", price: "", weight: "" })
    const Close = () => {
        setOpen2(false)
    }
    useEffect(() => {
        getDataUpdate();
    }, [idUpdate])
    const getDataUpdate = async () => {
        if (idUpdate !== undefined) {
            let res = await fetchData.get(`/products/${idUpdate}`)
            // console.log("res:", res);
            if (res && res.data) {
                setDataEdit({ title: res.data.title, sku: res.data.sku, weight: res.data.weight, price: res.data.price })
            }
        }
    }

    const handleClose2 = () => {
        /* updating title of product with id 1 */
        fetch(`https://dummyjson.com/products/${idUpdate}`, {
            method: 'PUT', /* or PATCH */
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: `${dataEdit.title}`,
                sku: `${dataEdit.sku}`,
                weight: `${dataEdit.weight}`,
                price: `${dataEdit.price}`
            })
        })
            .then(res => res.json())
            .then(console.log);
        setOpen2(false)
    }
    const getInput2 = () => {
        const { name, value } = event.target;
        setDataEdit((prevData) => ({ ...prevData, [name]: value }))
        // console.log("event", event);
        // console.log("title:", dataEdit.title);
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
                    <div className=" h-[26px] flex flex-row justify-between text-sm">
                        <button onClick={Close} className=" w-[85px] h-[26px]  bg-[#04474433] text-[#004744] flex flex-row items-center justify-center">Cancel</button>
                        {/* <button onClick={handleClose2} className="w-[72px] h-[26px]  bg-[#004744] text-white flex flex-row items-center justify-center">Save</button> */}
                    </div>
                </div>
                <form className='w-[377px] h-[26px] flex flex-col ml-10 mb-[22px] mt-7 justify-between items-start '>
                    <label htmlFor="title" className='flex w-[300px] flex-row justify-between items-center'>title
                        <input type='text' id='title' value={dataEdit.title} name='title' onChange={getInput2} placeholder='Organization Name' className="bg-[#F1F1F1] w-[245px] h-[14px] text-xs " />
                    </label>
                    <label htmlFor="" className='flex w-[300px] flex-row justify-between items-center'>sku
                        <input type='text' id='sku' value={dataEdit.sku} name='sku' onChange={getInput2} placeholder="Organization Name" className="bg-[#F1F1F1] w-[245px] h-[14px] text-xs  " />
                    </label>
                    <label htmlFor="" className='flex w-[300px] flex-row justify-between items-center'>weight
                        <input type='text' id='weight' value={dataEdit.weight} name='weight' onChange={getInput2} placeholder="Organization Name" className="bg-[#F1F1F1] w-[245px] h-[14px] text-xs  " />
                    </label>
                    <label htmlFor="" className='flex w-[300px] flex-row justify-between items-center'>price
                        <input type='text' id='price' value={dataEdit.price} name='price' onChange={getInput2} placeholder="Organization Name" className="bg-[#F1F1F1] w-[245px] h-[14px] text-xs  " />
                    </label>
                    <button onClick={handleClose2} type='submit' className='w-[85px] h-[26px]  bg-[#004744] text-white flex flex-row items-center justify-center'>Edit</button>
                </form>
            </Box>
        </Modal>
    )
}

export default ModalEdit
