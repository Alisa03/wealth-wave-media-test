import { useCookies } from "~/shared/hooks"
import { Button } from "~/shared/ui"

export const HandleAccept = ({onClose}: {onClose(): void}) => {
    const { editCookie } = useCookies()

    return <Button onClick={() => {
        editCookie('accept', true)
        onClose()
    }} variant="contained"
    >
        Accept
    </Button>
}