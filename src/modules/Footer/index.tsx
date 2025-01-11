import clsx from 'clsx'

import { Menu } from '~/features'

import s from './footer.module.scss'

export const Footer = () => {
    return <footer className={clsx('flex flex-column', s.block)}>
        <Menu />
        <p className={clsx('text', s.text)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, non. Mollitia eos hic maiores error eaque quod, reprehenderit quis, voluptates saepe optio sed. Iste ratione numquam aut nobis recusandae alias.
        </p>
    </footer>
}