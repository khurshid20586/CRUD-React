import React, { useState, useEffect } from "react";

const Contact = () => {
    const [data, setdata] = useState({})
    useEffect(() => {
        const {state} = window.history
        setdata(state.usr)
    }, [window.history])
    console.log(data.entries)
    return <><h1>Contact</h1>
    {data?.entries && data?.entries.map((itm, i) => {
        if(i < 10){
            return <p>{itm.API}</p>
        }
        return []
    })}
    </>
}

export default Contact