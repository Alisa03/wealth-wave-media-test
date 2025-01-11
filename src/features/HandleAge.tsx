import { useCookies } from "~/shared/hooks"
import { Button } from "~/shared/ui"

interface IProps {
    onClose(): void, 
    text: string, 
    value: boolean
}

export const HandleAge = ({onClose, text, value}: IProps) => {
    const { editCookie } = useCookies()

    return <Button variant="contained"
        onClick={() => {
            editCookie('age', value)
            onClose()
        }}
    >
        {text}
    </Button>
}