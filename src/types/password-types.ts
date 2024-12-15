import { ReactNode } from "react"

// Password Types
export type PasswordProps = {
    symbols: boolean,
    numbers: boolean,
    capitalLetters: boolean
    smallLetters: boolean
}

export type PasswordPreferenceProps = {
    preference: string,
    isChecked: boolean
}

export type PasswordPreferencesObjData = {
    length: number,
    elements: string[]
}

// Context and Provider types
export type PasswordContextProps = {
    password: string
    passwordLength: number,
    setPasswordLength: (newlength: number) => void,
    createPwd: () => void,
    handlePasswordPreferencesArray: (pwdPreferences: PasswordPreferenceProps) => void,
}

export type PasswordProviderProps = {
    children: ReactNode
}

// API Response type
export type PasswordApiResponse = {
    data: string,
    message?: string
}