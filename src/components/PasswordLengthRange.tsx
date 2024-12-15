"use client"

import { usePwd } from "../hooks/usePwd"

export const PasswordLengthRange: React.FC = () => {

    const {
        passwordLength,
        setPasswordLength
    } = usePwd()

    return (
        <input
            type="range"
            min="4"
            max="12"
            step="1"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            onChange={ (e) => setPasswordLength(+e.target.value) }
            value={passwordLength}
        />
    )
}