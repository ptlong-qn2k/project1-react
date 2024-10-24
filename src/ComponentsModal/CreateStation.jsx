import React from 'react';
import { useState } from 'react';
import 'reactjs-popup/dist/index.css';
import '../Styles/App.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
const CreateStation = ({ open, setOpen }) => {
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
    const [data, setData] = useState({
        title: '',
        sku: '',
        price: '',
        weight: '',
    });

    const getInput1 = () => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleClose = () => {
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: `${data.title}`,
                sku: `${data.sku}`,
                weight: `${data.weight}`,
                price: `${data.price}`,
                /* other product data */
            }),
        })
            .then((res) => res.json())
            .then(console.log);
        setOpen(false);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className="bg-white w-[420px] h-full px-5">
                <div className="w-[377px] h-[26px] flex flex-row mx-auto mb-[22px] mt-7 justify-between items-center">
                    <button className="text-sm flex flex-row items-center h-[26px] font-bold">Add Station</button>
                    <Button
                        onClick={handleClose}
                        variant="container"
                        className={`w-[85px] h-[26px] !bg-[#04474433] !lowercase`}
                    >
                        cancel
                    </Button>
                </div>
                <form className="w-[377px] h-[26px] flex flex-col ml-10 mb-[22px] mt-7 justify-between items-start ">
                    <label htmlFor="title" className="flex w-[300px] flex-row justify-between items-center">
                        title
                        <input
                            type="text"
                            id="title"
                            value={data.title}
                            name="title"
                            onChange={getInput1}
                            placeholder="Organization Name"
                            className="bg-[#F1F1F1] w-[245px] h-[14px] text-xs "
                        />
                    </label>
                    <label htmlFor="" className="flex w-[300px] flex-row justify-between items-center">
                        sku
                        <input
                            type="text"
                            id="sku"
                            value={data.sku}
                            name="sku"
                            onChange={getInput1}
                            placeholder="Organization Name"
                            className="bg-[#F1F1F1] w-[245px] h-[14px] text-xs  "
                        />
                    </label>
                    <label htmlFor="" className="flex w-[300px] flex-row justify-between items-center">
                        weight
                        <input
                            type="text"
                            id="weight"
                            value={data.weight}
                            name="weight"
                            onChange={getInput1}
                            placeholder="Organization Name"
                            className="bg-[#F1F1F1] w-[245px] h-[14px] text-xs  "
                        />
                    </label>
                    <label htmlFor="" className="flex w-[300px] flex-row justify-between items-center">
                        price
                        <input
                            type="text"
                            id="price"
                            value={data.price}
                            name="price"
                            onChange={getInput1}
                            placeholder="Organization Name"
                            className="bg-[#F1F1F1] w-[245px] h-[14px] text-xs  "
                        />
                    </label>
                    <button
                        onClick={handleClose}
                        type="submit"
                        className="w-[85px] h-[26px]  bg-[#004744] text-white flex flex-row items-center justify-center"
                    >
                        Create
                    </button>
                </form>
            </Box>
        </Modal>
    );
};
export default CreateStation;
