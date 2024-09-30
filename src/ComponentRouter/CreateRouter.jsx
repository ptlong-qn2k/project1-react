import React from 'react';
import { useState } from "react";
import 'reactjs-popup/dist/index.css';
import '../Styles/App.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import Toastify from '../ComponentPage/Toasttify';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateRouter = ({ }) => {
    const navigate = useNavigate()
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm()
    const Close = () => {
        // setOpen(true)
        navigate("/")
    }
    const handleClose = (data) => {
        // setOpen(false)
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: `${data.title}`,
                sku: `${data.sku}`,
                weight: `${data.weight}`,
                price: `${data.price}`,
                /* other product data */
            })
        })
            .then(Toastify);
        navigate("/")
        // reset()
    }



    return (
        <div className='flex flex-col items-center'>
            <Box className="bg-white w-[420px] justify-center h-full px-5">
                <div className="w-[377px] h-[26px] flex flex-row mx-auto mb-[22px] mt-7 justify-between items-center">
                    <button className="text-sm flex flex-row items-center h-[26px] font-bold">Add Station</button>
                    <Button onClick={Close} variant="container" className={`w-[85px] h-[26px] !bg-[#04474433] !lowercase`} >cancel</Button>
                </div>
                <form onSubmit={handleSubmit(handleClose)} className='w-[377px] h-[26px] flex flex-col ml-10 mb-[22px] mt-7 justify-between items-start'>
                    <label className='flex w-[300px] flex-row justify-between items-center'>title:
                        <input placeholder='  title' className="bg-[#F1F1F1] w-[245px] h-[14px] text-xs "
                            {...register("title", {
                                // required: true,
                                maxLength: 20,
                                pattern: /^[A-Za-z]+$/i
                            })}
                        />
                    </label>
                    {/* {errors?.title?.type === "required" && <p>This field is required</p>} */}
                    {errors?.title?.type === "maxLength" && (
                        <p>First name cannot exceed 20 characters</p>
                    )}
                    {errors?.title?.type === "pattern" && (
                        <p>Alphabetical characters only</p>
                    )}
                    <label className='flex w-[300px] flex-row justify-between items-center'>sku :
                        <input placeholder='  sku' {...register("sku", { pattern: /^[A-Za-z]+$/i })} className="bg-[#F1F1F1] w-[245px] h-[14px] text-xs" />
                    </label>
                    {errors?.sku?.type === "pattern" && (
                        <p>Alphabetical characters only</p>
                    )}
                    <label className='flex w-[300px] flex-row justify-between items-center'>weight:
                        <input placeholder='  weight' {...register("weight", { min: 0, max: 99 })} className="bg-[#F1F1F1] w-[245px] h-[14px] text-xs " />
                    </label>
                    {errors.weight && (
                        <p>You Must be older then 0 and weight then 99 kg</p>
                    )}
                    <label className='flex w-[300px] flex-row justify-between items-center'>price:
                        <input placeholder='  price' {...register("price", { min: 0, max: 99 })} className="bg-[#F1F1F1] w-[245px] h-[14px] text-xs " />
                    </label>
                    {errors.price && (
                        <p>you must be older then o and price 99 $</p>
                    )}
                    <input type="submit" value="create" className=' cursor-pointer rounded-[10px] w-[85px] h-[26px] bg-[#004744] text-white flex flex-row items-center justify-center' />

                </form>
            </Box>
            <ToastContainer />
        </div>

    )
}
export default CreateRouter