import React, { useEffect } from 'react';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import { fetchData } from '../Services/UserService';
import 'reactjs-popup/dist/index.css';
import '../Styles/App.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const ModalGetSingle = ({ setOpen3, open3, id }) => {
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
    const [dataSingle, setDataSingle] = useState({});
    useEffect(() => {
        getSingleUser();
    }, [id]);
    const handleClose3 = () => {
        setOpen3(false);
        setDataSingle({});
    };

    const getSingleUser = async () => {
        if (id !== undefined) {
            let res = await fetchData.get(`products/${id}`);
            if (res && res.data) {
                setDataSingle(res.data);
            }
        }
    };

    return (
        <Modal
            open={open3}
            onClose={handleClose3}
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
            {JSON.stringify(dataSingle) === '{}' ? (
                <p className="bg-white text-center">khong co du lieu data</p>
            ) : (
                <Box
                    sx={style}
                    className="w-[378px] h-full border border-solid flex flex-col m-auto relative top-[100px]"
                >
                    <p className="text-center mt-5">
                        {dataSingle.title}-{dataSingle.price}$
                    </p>
                    <img src={`${dataSingle.images}`} alt="" className="w-[300px] h-[300px] mx-auto" />
                    <div className="w-[203px] h-[26px] flex flex-row justify-between mx-auto mt-5">
                        <button className="w-[99px] h-full text-sm bg-[#04474433] text-[#004744] flex items-center justify-center">
                            Cancel
                        </button>
                        <button
                            onClick={(e) => handleClose3()}
                            className="w-[94px] h-full text-sm bg-[#004744] text-white flex items-center justify-center"
                        >
                            Confirm
                        </button>
                    </div>
                </Box>
            )}
        </Modal>
    );
};
export default ModalGetSingle;
