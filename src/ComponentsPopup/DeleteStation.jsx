import React from 'react'
import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../App.css'


const DeleteStation = () => {
    const [detele, SetDelete] = useState()

    return (
        <>
            <div className="w-[378px] h-[190px] border border-solid flex flex-col m-auto relative top-[100px]">
                <h2 className="text-xl absolute  left-[34px] top-[41px]">Delete Station?</h2>
                <p className="text-xs absolute w-[314px] left-[34px] top-[69px]">This action is not reversible, all child-organisation data will be deleted.</p>
                <div className="w-[203px] h-[26px] flex flex-row justify-between absolute left-[145px] top-[132px]">
                    <button className="w-[99px] h-full text-sm bg-[#04474433] text-[#004744] flex items-center justify-center">Cancel</button>
                    <button className="w-[94px] h-full text-sm bg-[#004744] text-white flex items-center justify-center">Confirm</button>
                </div>
            </div>


        </>
    )
}
export default DeleteStation
{/* <div className='h-[45px] bg-[#7B7B7B0D] flex flex-row'>
            <h3 className='w-[29px] h-full flex flex-row justify-center items-center'></h3>
            <h3 className='w-[182px] h-full flex flex-row pl-2 items-center'>Brand</h3>
            <h3 className='w-[304px] h-full flex flex-row pl-2 items-center '>Sku</h3>
            <h3 className='w-[304px] h-full flex flex-row pl-2 items-center'>Weight</h3>
            <h3 className='w-[306px] h-full flex flex-row pl-2 items-center'>Price</h3>
            <div className='w-[126px] h-full flex '>
              <img src="/public/Station/Switch2.png" alt="" className='w-[25px] h-[14px] m-auto' />
            </div>
            <div className='w-[140px] h-full flex flex-row justify-center items-center text-[13px]'>
              <h3 className='text-[#004744] mr-2'>VIEW</h3>
              <h3 className='text-[#004744] mr-4'>EDIT</h3>
              <h3 className='text-[#7C7B7B]'>DELETE</h3>
            </div>
          </div>

          <div className='h-[45px] flex flex-row'>
            <h3 className='w-[29px] h-full flex flex-row justify-center items-center'></h3>
            <h3 className='w-[182px] h-full flex flex-row pl-2 items-center'>Brand</h3>
            <h3 className='w-[304px] h-full flex flex-row pl-2 items-center '>Sku</h3>
            <h3 className='w-[304px] h-full flex flex-row pl-2 items-center'>Weight</h3>
            <h3 className='w-[306px] h-full flex flex-row pl-2 items-center'>Price</h3>
            <div className='w-[126px] h-full flex '>
              <img src="/public/Station/Switch2.png" alt="" className='w-[25px] h-[14px] m-auto' />
            </div> <div className='w-[140px] h-full flex flex-row justify-center items-center text-[13px]'>
              <h3 className='text-[#004744] mr-2'>VIEW</h3>
              <h3 className='text-[#004744] mr-4'>EDIT</h3>
              <h3 className='text-[#7C7B7B]'>DELETE</h3>
            </div>
          </div>

          <div className='h-[45px] bg-[#7B7B7B0D] flex flex-row'>
            <h3 className='w-[29px] h-full flex flex-row justify-center items-center'></h3>
            <h3 className='w-[182px] h-full flex flex-row pl-2 items-center'>Brand</h3>
            <h3 className='w-[304px] h-full flex flex-row pl-2 items-center '>Sku</h3>
            <h3 className='w-[304px] h-full flex flex-row pl-2 items-center'>Weight</h3>
            <h3 className='w-[306px] h-full flex flex-row pl-2 items-center'>Price</h3>
            <div className='w-[126px] h-full flex '>
              <img src="/public/Station/Switch2.png" alt="" className='w-[25px] h-[14px] m-auto' />
            </div>
            <div className='w-[140px] h-full flex flex-row justify-center items-center text-[13px]'>
              <h3 className='text-[#004744] mr-2'>VIEW</h3>
              <h3 className='text-[#004744] mr-4'>EDIT</h3>
              <h3 className='text-[#7C7B7B]'>DELETE</h3>
            </div>
          </div>

          <div className='h-[45px] flex flex-row'>
            <h3 className='w-[29px] h-full flex flex-row justify-center items-center'></h3>
            <h3 className='w-[182px] h-full flex flex-row pl-2 items-center'>Brand</h3>
            <h3 className='w-[304px] h-full flex flex-row pl-2 items-center '>Sku</h3>
            <h3 className='w-[304px] h-full flex flex-row pl-2 items-center'>Weight</h3>
            <h3 className='w-[306px] h-full flex flex-row pl-2 items-center'>Price</h3>
            <div className='w-[126px] h-full flex '>
              <img src="/public/Station/Switch2.png" alt="" className='w-[25px] h-[14px] m-auto' />
            </div>
            <div className='w-[140px] h-full flex flex-row justify-center items-center text-[13px]'>
              <h3 className='text-[#004744] mr-2'>VIEW</h3>
              <h3 className='text-[#004744] mr-4'>EDIT</h3>
              <h3 className='text-[#7C7B7B]'>DELETE</h3>
            </div>
          </div> */}