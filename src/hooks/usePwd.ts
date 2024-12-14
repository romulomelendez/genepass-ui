"use client"

import { useContext } from "react"

import { PasswordContext } from "../contexts/PasswordContext";

export const usePwd = () => useContext(PasswordContext)
