"use client"

import { usePwd } from "@/hooks/usePwd"

import { BsFillClipboardFill } from "react-icons/bs"
import { Toaster } from "react-hot-toast"

import copy from "copy-to-clipboard"
import { createToast } from "@/utils"

export const PasswordDisplay: React.FC = () => {
  
  const { password } = usePwd();

  const handleCopy = (): void | Boolean | string => {
    
    if (!password)
      return createToast("There is no password to copy!", "❌")

    copy(password)
    createToast("Copied to your clipboard!", "📋")
    return
  }

  return (
    <section className="flex justify-between p-1 h-15 sm:h-28 w-64 sm:w-fit max-w-xl rounded-2xl bg-slate-900 sm:mt-10">
      <input
        type="text"
        className="bg-slate-900 h-full w-52 sm:w-full p-4 text-violet-700 text-2xl sm:text-5xl outline-none text-center"
        value={password}
        readOnly
      />
      <button
        type="button"
        className="bg-slate-900 flex justify-center items-center p-1 mr-1 h-full w-12"
        onClick={handleCopy}
      >
        <BsFillClipboardFill size="22" />
      </button>
      <Toaster />
    </section>
  )
}
