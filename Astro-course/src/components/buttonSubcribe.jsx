import {useState} from "react";
import {toast} from "react-toastify"


function Button () {
    const [subscribe, setSubscribe] = useState(false);
    return (
        <button onClick = {() => {
            toast.success("Felicidades, ya estas subscrito");
            setSubscribe(!subscribe);
        }}>
            {
                subscribe ? "Gracias por subcribirte" : "Click para subcribirte"
            }
        </button>
    );
}

export default Button;