import { useForm } from "react-hook-form"
import '../Styles/App.css'
import Checkbox from '@mui/material/Checkbox';


const Login = () => {
    // const { register, handleSubmit, watch, reset, formState: { errors } } = useForm()
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleLogin = () => {
        console.log("tao form login");
        console.log("error", errors);
    }
    const onError = (errors) => {
        console.log("error", errors);

    }

    return (
        <div className="w-full h-full flex flex-row items-center  ">
            <img src="../public/login/Illustrations.png" alt="" className="w-[67%] h-[100%]" />
            <div className="w-[33%] h-full flex flex-col px-[5%] justify-center">
                <div className="w-[100%] h-[74px] flex flex-col justify-between mb-[23px]">
                    <p className="text-lg font-bold text-center">Welcome to Entrance Test Interview!</p>
                    <p className="text-sm text-centers text-center">Please sign-in to your account and start the adventure</p>
                </div>

                <form onSubmit={handleSubmit(handleLogin, onError)} className="">
                    <div className="mb-[15px]">
                        <label htmlFor="" className="block">Email*</label>
                        <input type="text" placeholder="johndoe@gmail.com" className="w-full h-[38px] border border-solid rounded-[5px] pl-[15px] bg-white"
                            {...register("Email", {
                                required: true,
                                pattern: /^[A-Za-z]+$/i
                            })} />
                        {errors?.Email?.type === "required" && (
                            <p className="text-[#EA5455]">Email is required</p>
                        )}
                    </div>
                    <div className="mb-[14px]">
                        <div className="flex flex-row h-[18px] justify-between items-center mb-1">
                            <label htmlFor="">Password*</label>
                            <button className="text-[#7367F0] flex flex-row items-center bg-white border-hidden h-[18px]">forgot Password?</button>
                        </div>
                        <input type="text" placeholder="⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉" className="w-full h-[38px] border border-solid rounded-[5px] pl-[15px] bg-white"
                            {...register("Password", {
                                required: true,
                            })} />
                        {errors?.Password?.type === "required" && (
                            <p className="text-[#EA5455]">Password is require</p>
                        )}
                    </div>
                    <div className="flex flex-row w-[134px] h-[21px]  items-center mb-[14px]">
                        <Checkbox {...label} defaultChecked className=" !h-[21px] " />
                        <p className="text-sm ">Remember me</p>
                    </div>
                    <input type="submit" value="login" className="text-sm bg-[#7367F0] w-full h-[38px] mb-[14px] cursor-pointer" />
                    <div className="flex flex-row justify-center text-sm">
                        <p className="text-[#6E6B7B]">New on our platform?</p>
                        <p className="text-[#7367F0] cursor-pointer">Create an account</p>
                    </div>
                    <div className="flex flex-row items-center w-full mx-auto mb-[14px]">
                        <hr className=" w-full border border-solid border-[#E9EAEC]" />
                        <p className="mx-[10px]">or</p>
                        <hr className="w-full border border-[#E9EAEC]         " />
                    </div>
                    <div className="w-[153px] h-[30px] flex flex-row justify-between mx-auto">
                        <img src="../public/login/Facebook.png" alt="" />
                        <img src="../public/login/Twitter.png" alt="" />
                        <img src="../public/login/Mail.png" alt="" />
                        <img src="../public/login/GIt.png" alt="" />
                    </div>

                </form>
            </div>
        </div>
    )
}
export default Login