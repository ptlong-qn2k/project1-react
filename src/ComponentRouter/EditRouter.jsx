import React, { useState, useEffect } from 'react';
import { fetchData } from '../Services/UserService';
import 'reactjs-popup/dist/index.css';
import '../Styles/App.css'
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import Toastify from '../ComponentPage/Toasttify';




const GetEditRouter = ({ }) => {
    const params = useParams()
    // console.log("params:", params);

    const [dataEdit, setDataEdit] = useState({ title: "", sku: "", price: "", weight: "" })
    const navigate = useNavigate()
    const Close = () => {
        navigate("/")
    }
    useEffect(() => {
        getDataUpdate();
    }, [params.id])
    const getDataUpdate = async () => {
        if (params.id !== undefined) {
            let res = await fetchData.get(`/products/${params.id}`)
            // console.log("res:", res);
            if (res && res.data) {
                setDataEdit({ title: res.data.title, sku: res.data.sku, weight: res.data.weight, price: res.data.price })
            }
        }
    }

    const handleClose2 = () => {
        /* updating title of product with id 1 */
        fetch(`https://dummyjson.com/products/${params.id}`, {
            method: 'PUT', /* or PATCH */
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: `${dataEdit.title}`,
                sku: `${dataEdit.sku}`,
                weight: `${dataEdit.weight}`,
                price: `${dataEdit.price}`
            })
        })
            .then(Toastify);

        navigate("/")
    }
    const getInput2 = () => {
        const { name, value } = event.target;
        setDataEdit((prevData) => ({ ...prevData, [name]: value }))
        // console.log("event", event);
        // console.log("title:", dataEdit.title);
    }

    return (
        <div>
            <Box className="w-full h-full flex flex-col justify-between items-center bg-white ">
                <div className="w-[377px] h-[26px] flex flex-row mx-auto mb-[22px] mt-7 justify-between">
                    <p onClick={Toastify} className="text-sm my-auto">Add Station</p>
                    <div className=" h-[26px] flex flex-row justify-between text-sm">
                        <button onClick={Close} className=" w-[85px] h-[26px]  bg-[#04474433] text-[#004744] flex flex-row items-center justify-center">Cancel</button>
                        {/* <button onClick={handleClose2} className="w-[72px] h-[26px]  bg-[#004744] text-white flex flex-row items-center justify-center">Save</button> */}
                    </div>
                </div>
                <form className='w-[377px] h-[26px] flex flex-col mb-[22px] mt-7 justify-between items-start '>
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
            <ToastContainer />
        </div>

    )
}

export default GetEditRouter
