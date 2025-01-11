import clsx from 'clsx'
import { Link } from 'react-router-dom'

import { AgeVerification } from '~/screens'

import { Button } from '~/shared/ui'
import { GAME_ROUTE } from '~/shared/consts/router'

import s from './home.module.scss'

export const Home = () => {
    return <main className="main">
        <AgeVerification />
        <section className={clsx('flex flex-column container', s.hero)}>
            <h2 className='h2'>
                Play smart: online casino for adults 18+!
            </h2>
            <img className={s.img} src='/18plus.png' alt='Only from 18 years old' />
            <div className={s.text}>
                <p className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec lacus tempus, luctus nunc eget, pulvinar libero. Quisque nisl ligula, vulputate ut massa sed, sollicitudin suscipit elit. Mauris ac purus a quam dapibus semper in quis erat. Cras eu magna facilisis nisl iaculis ornare vitae non ipsum.
                </p>
                <p className='text'>
                    Aliquam cursus lacus non tristique elementum. Donec laoreet sapien ut libero aliquam convallis. In consectetur aliquet turpis ut finibus. Cras rutrum dolor eu massa hendrerit eleifend. Nulla a purus volutpat neque posuere fermentum.
                </p>
            </div>
        </section>
        <section className={s.game}>
            <div className={clsx("container flex flex-column", s.game__block)}>
                <h2 className="h2">
                    Mergulhe no mundo da pesca com Fish Slot: tente a sorte agora mesmo!
                </h2>
                <p className='text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolorum doloremque est, quibusdam odit voluptatibus illum tenetur? Neque, placeat! Nam aut perspiciatis placeat quaerat nulla omnis, cumque molestias fugit harum.
                </p>
                <Button component={Link} to={GAME_ROUTE} className={s.btn} variant='contained'>
                    Start playing
                </Button>
            </div>
        </section>
        <section className='container'>
            <h2 className="h2">
                Teste sua experiência de cassino em nossa plataforma de jogos interativos: aproveite o jogo e ganhe!
            </h2>
            <div className={clsx('flex', s.advantages)}>
                <div className={s.block}>
                    <h4 className={clsx('h4', s.advantages__title)}>Lorem ipsum</h4>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus lacus non tristique elementum.</p>
                </div>
                <div className={s.block}>
                    <h4 className={clsx('h4', s.advantages__title)}>Lorem ipsum</h4>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus lacus non tristique elementum.</p>
                </div>
                <div className={s.block}>
                    <h4 className={clsx('h4', s.advantages__title)}>Lorem ipsum</h4>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus lacus non tristique elementum.</p>
                </div>
            </div>
        </section>
    </main>
}