import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { fetchData } from '../Services/UserService';
import 'reactjs-popup/dist/index.css';
import '../Styles/App.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
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
    const [dataEdit, setDataEdit] = useState({
        title: '',
        sku: '',
        price: '',
        weight: '',
    });
    const Close = () => {
        setOpen2(false);
    };
    useEffect(() => {
        getDataUpdate();
    }, [idUpdate]);
    const getDataUpdate = async () => {
        if (idUpdate !== undefined) {
            let res = await fetchData.get(`/products/${idUpdate}`);
            // console.log("res:", res);
            if (res && res.data) {
                setDataEdit({
                    title: res.data.title,
                    sku: res.data.sku,
                    weight: res.data.weight,
                    price: res.data.price,
                });
            }
        }
    };

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    const handleClose2 = (data) => {
        setDataEdit({
            title: data.title,
            sku: data.sku,
            weight: data.weight,
            price: data.price,
        });
        /* updating title of product with id 1 */
        fetch(`https://dummyjson.com/products/${idUpdate}`, {
            method: 'PUT' /* or PATCH */,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: `${data.title}`,
                sku: `${data.sku}`,
                weight: `${data.weight}`,
                price: `${data.price}`,
            }),
        })
            .then((res) => res.json())
            .then(console.log);
        setOpen2(false);
        reset();
    };

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
                <div className="w-[377px] h-[26px] flex flex-row mx-auto mb-[22px] mt-7 justify-between items-center">
                    <button className="text-sm flex flex-row items-center h-[26px] font-bold">Add Station</button>
                    <Button
                        onClick={Close}
                        variant="container"
                        className={`w-[85px] h-[26px] !bg-[#04474433] !lowercase`}
                    >
                        cancel
                    </Button>
                </div>
                <form
                    onSubmit={handleSubmit(handleClose2)}
                    className="w-[377px] h-[26px] flex flex-col ml-10 mb-[22px] mt-7 justify-between items-start"
                >
                    <label className="flex w-[300px] flex-row justify-between items-center">
                        title:
                        <input
                            placeholder="  title"
                            value={dataEdit.title}
                            className="bg-[#F1F1F1] w-[245px] h-[14px] text-xs "
                            {...register('title')}
                        />
                    </label>
                    {/* {errors?.title?.type === "required" && <p>This field is required</p>} */}
                    {errors?.title?.type === 'maxLength' && <p>First name cannot exceed 20 characters</p>}
                    {errors?.title?.type === 'pattern' && <p>Alphabetical characters only</p>}
                    <label className="flex w-[300px] flex-row justify-between items-center">
                        sku :
                        <input
                            placeholder="  sku"
                            value={dataEdit.sku}
                            {...register('sku')}
                            className="bg-[#F1F1F1] w-[245px] h-[14px] text-xs"
                        />
                    </label>
                    {errors?.sku?.type === 'pattern' && <p>Alphabetical characters only</p>}
                    <label className="flex w-[300px] flex-row justify-between items-center">
                        weight:
                        <input
                            placeholder="  weight"
                            value={dataEdit.weight}
                            {...register('weight')}
                            className="bg-[#F1F1F1] w-[245px] h-[14px] text-xs "
                        />
                    </label>
                    {errors.weight && <p>You Must be older then 0 and weight then 99 kg</p>}
                    <label className="flex w-[300px] flex-row justify-between items-center">
                        price:
                        <input
                            placeholder="  price"
                            value={dataEdit.price}
                            {...register('price')}
                            className="bg-[#F1F1F1] w-[245px] h-[14px] text-xs "
                        />
                    </label>
                    {errors.price && <p>you must be older then o and price 99 $</p>}
                    <input
                        type="submit"
                        value="edit"
                        className=" cursor-pointer rounded-[10px] w-[85px] h-[26px] bg-[#004744] text-white flex flex-row items-center justify-center"
                    />
                </form>
            </Box>
        </Modal>
    );
};

export default ModalEdit;
