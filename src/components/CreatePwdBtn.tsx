"use client"

import { usePwd } from "../hooks/usePwd"

export const CreatePwdBtn = () => {

  const { createPwd } = usePwd()

  return (
      <button
        type="button"
        className="bg-violet-800 w-full p-4 rounded-2xl text-lg hover:bg-violet-900"
        onClick={createPwd}
      >
        GENERATE
      </button>
  )
}
