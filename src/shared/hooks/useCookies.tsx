interface IProps {
    [key: string]: boolean | string | number
}

export const useCookies = () => {
    const cookies = document.cookie
    let objCookies: IProps = {}

    if (cookies) {
        objCookies = cookies.split('; ')
            .reduce((acc: IProps, curr) => {
                const [keyAcc, valueAcc]: string[] = curr.split('=');
                acc[keyAcc] = valueAcc

                return acc;
            }, {});
    }

    const editCookie = (key: string, value: string | boolean | number) => {
        objCookies = {
            ...objCookies,
            [key]: value
        }

        const string = Object.entries(objCookies)
            .map(([key, value]) => `${key}=${value}`)
            .join('; ');

        return document.cookie = string
    }

    return { cookies, editCookie, objCookies }
}