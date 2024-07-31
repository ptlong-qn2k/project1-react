import { useState, useEffect } from "react";
import '../App.css'



const TableStation = ({ listUsers }) => {



  return (
    <>
      <table className='w-full h-[265px] m-auto  border-gray-300 border-[2px] mb-[368px] text-xs'>

        <thead className='h-[40px] bg-[#EFEFEF] border-b-[3px] border-gray-300 flex flex-row font-bold'>

          <th className='w-[29px] h-full flex flex-row justify-center items-center'>ID</th>
          <th className='w-[182px] h-full flex flex-row pl-2 items-center'>Brand</th>
          <th className='w-[304px] h-full flex flex-row pl-2 items-center '>Sku</th>
          <th className='w-[304px] h-full flex flex-row pl-2 items-center'>Weight</th>
          <th className='w-[306px] h-full flex flex-row pl-2 items-center'>Price</th>
          <th className='w-[123px] h-full flex flex-row justify-center items-center'>Enabled</th>
          <th className='w-[151px] h-full flex flex-row justify-center items-center'>Action</th>
        </thead>
        <tbody className='h-[225px] '>
          {listUsers && listUsers.map((data, index) => (

            <tr key={`users-${index}`} className='h-[45px] flex flex-row' >
              <td className='w-[29px] h-full flex flex-row justify-center items-center'>{data.id}</td>
              <td className='w-[182px] h-full flex flex-row pl-2 items-center'>{data.brand}</td>
              <td className='w-[304px] h-full flex flex-row pl-2 items-center '>{data.sku}</td>
              <td className='w-[304px] h-full flex flex-row pl-2 items-center'>{data.weight}</td>
              <td className='w-[306px] h-full flex flex-row pl-2 items-center'>{data.price}</td>
              <td className='w-[126px] h-full flex '>
                <img src="/public/Station/Switch.png" alt="" className='w-[25px] h-[14px] m-auto' />
              </td>
              <div className='w-[140px] h-full flex flex-row justify-center items-center text-[13px]'>
                <h3 className='text-[#004744] mr-2'>VIEW</h3>
                <h3 className='text-[#004744] mr-4'>EDIT</h3>
                <h3 className='text-[#7C7B7B]'>DELETE</h3>
              </div>
            </tr>
          ))
          }

        </tbody>
      </table >
    </>
  )
}
export default TableStation