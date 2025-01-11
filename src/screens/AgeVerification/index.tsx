import clsx from "clsx"
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

import { HandleAge } from "~/features/HandleAge";

import { useCookies } from "~/shared/hooks";
import { TERMS_ROUTE } from "~/shared/consts/router";

import s from './verification.module.scss'

export const AgeVerification = () => {
    const { objCookies } = useCookies()
    const [isOpen, setIsOpen] = useState(!objCookies.age)

    let portalDiv = document.getElementById('root') as HTMLElement;

    const navigate = useNavigate();

    useEffect(() => {
        const op = isOpen ? 'hidden' : 'unset'
        document.body.style.overflow = op
    }, [isOpen])

    return createPortal(<>
        {isOpen && <div className={clsx('flex flex-column flex-center', s.block)}>
            <div className={clsx('flex flex-column flex-center', s.content)}>
                <h2 className="h2">Are you 18 years old?</h2>
                <div className={s.buttons}>
                    <HandleAge text="Yes, I'm 18 yers old" value={true} onClose={() => setIsOpen(false)} />
                    <HandleAge text="No, I'm not 18 yers old" value={false} onClose={() => {
                        setIsOpen(false)
                        navigate(TERMS_ROUTE)
                    }} />
                </div>
            </div>
        </div>
        }
    </>, portalDiv)
}