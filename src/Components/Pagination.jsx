import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "../App.css"



export default function PaginationControlled({ onChangePage, total }) {
    const [page, setPage] = useState(1);

    const handleChange = (e, value) => {
        setPage(value)
        console.log("checkvalue", value);
        onChangePage(value)
    };

    return (
        <div className='flex flex-row justify-between items-center w-full h-[38px] m-auto mb-5'>
            <p className='w-[198px]h - [13px] text - [13px] cursor-pointer' >`Showing {page} to {total} of 32,316  entries`</p>
            <Stack spacing={2}>
                <Typography>Page: {page}</Typography>
                <Pagination count={total} page={page} onChange={handleChange} />
            </Stack>
        </div>

    )
}


