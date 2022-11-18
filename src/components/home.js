import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://api.publicapis.org/entries').then((resp) => resp.json()).then((obj) => setData(obj))
    }, [])
    return <><h1>
        Home</h1>
        <button type='button' onClick={() => navigate('/contact', { state: data })}>Home</button>

    </>
}

export default Home