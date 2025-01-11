import { HandleAccept, HandleDecline } from "~/features"

import s from './cookies.module.scss'
import clsx from "clsx"

export const CookiesAccept = ({onClose}: {onClose(): void}) => {
  return <div className={s.cookie}>
    <div className={clsx('flex flex-column',  s.content)}>
      <h2 className="h4">Cookie preferences</h2>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
        distinctio recusandae dolorum quae veniam cumque perferendis
        vero magnam repellat, adipisci earum delectus, placeat, eveniet
        accusamus dolore ipsa soluta. Obcaecati, omnis.
      </p>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
        rem at, velit nihil vitae tempore repellat a labore ratione
        iusto harum earum adipisci ducimus beatae quo voluptas quasi
        saepe et.
      </p>
      <div className={s.buttons}>
        <HandleAccept onClose={onClose} />
        <HandleDecline onClose={onClose} />
      </div>
    </div>
  </div>
}