"use client"

import { useContext } from "react"

import { PasswordContext } from "@/contexts"

export const usePwd = () => useContext(PasswordContext)
