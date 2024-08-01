
function App() {
    const hanleDelete = (dataFromChild) => {
        console.log("data: ", dataFromChild);
    }
    child(hanleDelete); //props

}

function child(callback) {
    console.log("callback: ", callback);

    const childData = 'child Data'

    callback(childData)

}
App();