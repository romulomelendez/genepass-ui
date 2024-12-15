import { createContext } from "react"

import { PasswordContextProps } from "../types"

export const initialValues = {
    password: "",
    passwordLength: 0,
    setPasswordLength: () => {},
    createPwd: () => {},
    handlePasswordPreferencesArray: () => {}
}

export const PasswordContext = createContext<PasswordContextProps>(initialValues)
