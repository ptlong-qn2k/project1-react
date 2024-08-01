import { useState } from "react";
import "../App.css"
const Pagination = (props) => {
    console.log("callback:", props);
    const [page, setPage] = useState(1)

    const onPage = props.onPage

    console.log("onPage:", onPage);

    const hanleClick = () => {
        onPage(10)
    }




    return (
        <>
            <div className='flex flex-row justify-between items-center w-full h-[38px] m-auto mb-5 '>
                <p className='w-[198px] h-[13px] text-[13px]'>Showing 1 to 10 of 32,316  entries</p>
                <nav className='flex flex-row'>
                    <div className='w-[132px] h-[38px] border border-[#D9D9D9] mr-[6px] flex flex-row justify-around items-center'>
                        <p className='text-xs w-16 h-3 flex flex-row items-center'>10 per page</p>
                        <img src="public/session4/chevron_down.png" alt="" className='w-6 h-6' />
                    </div>
                    <ul className=' cursor-pointer  w-[341px] h-[38px] border border-[#D9D9D9] flex flex-row  items-center'>
                        <li className='w-[89px] flex flex-row justify-center items-center'>
                            <a href="#" >Previous</a>
                        </li>
                        <li className='w-[197px] h-[38px] flex flex-row  items-center gap-x-[2px]'>

                            <a href="#" className='w-[29px] cursor-pointer h-full bg-[#004744] text-white flex flex-row items-center justify-center' >1</a>
                            <a onClick={hanleClick} href="#" className='w-8 h-full border border-[#D9D9D9] border-x-0 flex flex-row justify-center items-center'>2</a>
                            <a href="#" className='w-8 h-full border border-[#D9D9D9] border-r-0 flex flex-row justify-center items-center'>3</a>
                            <a href="#" className='w-[30px] h-full border border-[#D9D9D9] border-r-0 flex flex-row justify-center items-center'>4</a>
                            <a href="#" className='w-8 h-full border border-[#D9D9D9] border-r-0 flex flex-row justify-center items-center'>5</a>
                            <a href="#" className='w-8 h-full border border-[#D9D9D9] flex flex-row justify-center items-center'>6</a>
                        </li>
                        <li className='w-[55px] h-full flex flex-row justify-center items-center'>
                            <a href="#" >Next</a>
                        </li>
                    </ul>
                </nav>
            </div >
        </>
    )


}

export default Pagination