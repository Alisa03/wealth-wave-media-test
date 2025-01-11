import { Menu } from '~/features'

import s from './navbar.module.scss'

export const Navbar = () => {
    return <header className={s.header}>
        <Menu />
    </header>
}