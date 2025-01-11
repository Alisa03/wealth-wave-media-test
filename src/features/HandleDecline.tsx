import { useCookies } from "~/shared/hooks"
import { Button } from "~/shared/ui"

export const HandleDecline = ({onClose}: {onClose(): void}) => {
    const { editCookie } = useCookies()

    return <Button onClick={() => {
        editCookie('accept', false)
        onClose()
    }} variant="contained"
    >
        Decline
    </Button>
}