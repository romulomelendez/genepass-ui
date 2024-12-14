import { ReactNode } from "react"

// Password Types
export type PwdProps = {
    length: string,
    symbols: boolean,
    numbers: boolean,
    capitalLetters: boolean
    smallLetters: boolean
}

export type PwdPreferences = {
    name: string,
    content: boolean | string,
}

// Context and Provider types
export type PwdContextProps = {
    pwdData: PwdProps,
    handlePwdUserPreferences: ({ name, content }: PwdPreferences) => void,
    password: string
    createPwd: () => void,
}

export type PwdProviderProps = {
    children: ReactNode
}

// API Response type
export type PasswordApiResponse = {
    data: string,
    message?: string
}