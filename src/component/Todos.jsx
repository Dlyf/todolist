import React, {useEffect} from "react";
import axios from "axios";
const Todos = () => {
    useEffect(() => {
        axios.get().then((res) => {

        });
    }, []);
    return <h1>Hello world</h1>
};

export default Todos