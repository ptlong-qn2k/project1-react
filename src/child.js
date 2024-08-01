import React from "react";


const child = (props) => {
    // const { parentToChild, name } = props;
    // console.log("parent to child:", parentToChild)
    const hanleDelete = () => {
        console.log("nhan buttton");
    }

    return (
        <div>
            <button onClick={hanleDelete}>
                delete
            </button>
        </div>
    )
}
export default child;