"use client"

import { useState } from "react"

import { PasswordContext, initialValues } from "../contexts/PasswordContext"

import {
  PwdProviderProps,
  PwdProps,
  PasswordApiResponse,
  PwdPreferences,
} from "../types"

export const PasswordProvider = ({ children }: PwdProviderProps) => {
    const [pwdData, setPwdData] = useState<PwdProps>(initialValues.pwdData)
    const [password, setPassword] = useState("")

    const handlePwdUserPreferences = ({ name, content }: PwdPreferences): void => {

        let auxObject = initialValues.pwdData

        auxObject = Object.defineProperty(pwdData, name, { value: content })
        setPwdData({ ...auxObject })
    }

    const hasTrueValue = (): boolean => {

        const values = Object.values(pwdData)

        for(let value of values) {
            if(value === true)
                return true
        }
        return false
    }

    const createPwd = async (): Promise<void | string> => {
        
        if(!hasTrueValue())
            return alert("You cannot create a password without preferences! Please mark at least one checkbox!")

        const pwdDataResponse = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/createPwd",
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(pwdData),
        }
        )
        const pwd: PasswordApiResponse = await pwdDataResponse.json()
        setPassword(pwd.data)
    }

    return (
        <PasswordContext.Provider
        value={{
            pwdData,
            handlePwdUserPreferences,
            password,
            createPwd,
        }}
        >
        {children}
        </PasswordContext.Provider>
    )
}
