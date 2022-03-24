import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';
import {Toaster} from "react-hot-toast";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <Toaster />
        </div>
    )
}

export default Layout
