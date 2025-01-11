import { Outlet } from "react-router-dom"
import clsx from "clsx"

import { Footer, Navbar } from "~/modules"

import s from './layout.module.scss'

export const Layout = () => {
    return <div className={clsx('flex flex-column', s.wrapper)}>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
}