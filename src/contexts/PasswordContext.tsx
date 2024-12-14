import { createContext } from "react"

import { PwdContextProps } from "../types"

export const initialValues = {
    pwdData: {
        length: "8",
        symbols: false,
        numbers: false,
        capitalLetters: false,
        smallLetters: false
    },
    password: "",
    handlePwdUserPreferences: () => {},
    createPwd: () => {}
}

export const PasswordContext = createContext<PwdContextProps>(initialValues)
