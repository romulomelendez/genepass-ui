"use client"

import { useState } from "react"

import { PasswordContext } from "../contexts/PasswordContext"

import {
    PasswordProviderProps,
    PasswordApiResponse,
    PasswordPreferenceProps,
    PasswordPreferencesObjData,
} from "../types"

export const PasswordProvider = ({ children }: PasswordProviderProps) => {

    const [password, setPassword] = useState<string>("")
    const [passwordLength, setPasswordLength] = useState<number>(8)
    const [passwordPreferencesArrayData, setPasswordPreferencesArrayData] = useState<string[]>([])

    const handlePasswordPreferencesArray = ({ preference, isChecked }: PasswordPreferenceProps): void => {

        if(!isChecked) {
            setPasswordPreferencesArrayData(prevPreferencesArr => [
                ...prevPreferencesArr.filter(preferenceItem => preferenceItem !== preference)
            ])
            return
        }

        setPasswordPreferencesArrayData([
            ...passwordPreferencesArrayData,
            preference
        ])
        return
    }

    const hasAnyPreference = (): boolean => {

        if(passwordPreferencesArrayData.length === 0)
            return false
        return true
    }

    const createPasswordPreferencesObj = (): PasswordPreferencesObjData => {

        return {
            length: passwordLength,
            elements: passwordPreferencesArrayData
        }
    }

    const createPwd = async (): Promise<void | string> => {

        if(!hasAnyPreference())
            return alert("You cannot create a password without preferences! Please mark at least one checkbox!")

        const passwordData = createPasswordPreferencesObj()

        const { data: password } = await (await fetch(
            // process.env.NEXT_PUBLIC_API_URL + "/api/password/create",
            "http://localhost:3333/api/password/create",
            {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(passwordData),
            }
        )).json()

        setPassword(password)
    }

    return (
        <PasswordContext.Provider
          value={{
            password,
            createPwd,
            passwordLength,
            setPasswordLength,
            handlePasswordPreferencesArray
          }}
        >
            { children }
        </PasswordContext.Provider>
    )
}
