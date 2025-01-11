import clsx from "clsx"
import { Link } from "react-router-dom"

import { HOME_ROUTE, TERMS_ROUTE } from "~/shared/consts/router"

import s from './menu.module.scss'

export const Menu = () => {
    return <div className={clsx('container flex', s.block)}>
        <img className={s.icon} src='/Star.svg' alt='Logo' />
        <nav>
            <ul className={s.list}>
                <li><Link className={s.link} to={HOME_ROUTE}>Home</Link></li>
                <li><Link className={s.link} to={TERMS_ROUTE}>Terms and Conditions</Link></li>
            </ul>
        </nav>
        <img className={s.icon} src='/18plus.png' alt='Only from 18 years old' />
    </div>
}