import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Toastify = () => {
    toast("This is a toast notification !");
    // console.log("da nhan nut");
    return (
        <ToastContainer />
    )
}
export default Toastify