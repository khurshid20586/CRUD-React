import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import About from './about'
import Contact from './contact'
import NotFound from './404'

const RouterPage = () => {
    const objRoute = [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/contact',
            element: <Contact />
        }
    ]
    return (
        <Routes>
            {objRoute?.map((itm, i) => {
                return <Route key={i} path={itm.path} element={itm.element} />
            })}

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RouterPage