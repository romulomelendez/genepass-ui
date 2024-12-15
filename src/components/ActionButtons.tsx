"use client"

import { usePwd } from "../hooks"

import { Checkbox } from "./Checkbox"
import { PasswordLengthRange } from "./PasswordLengthRange"

export const ActionButtons: React.FC = () => {

  const {
    passwordLength
  } = usePwd()

  return (
    <section className="flex flex-col sm:flex-row p-7 gap-8 h-auto w-auto justify-center bg-slate-900 rounded-2xl">
      <div className="flex flex-col gap-3 justify-center items-center">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          { passwordLength }
        </label>
        <PasswordLengthRange />
      </div>
      <div className="flex flex-col gap-2 justify-center ml-9">
        <div className="flex gap-3 items-center">
          <Checkbox functionName="symbols" name="Specials" />
        </div>
        <div className="flex gap-3 items-center">
          <Checkbox functionName="numbers" name="Numbers" />
        </div>
        <div className="flex gap-3 items-center">
          <Checkbox functionName="capitalLetters" name="Capital Letters" />
        </div>
        <div className="flex gap-3 items-center">
          <Checkbox functionName="smallLetters" name="Small Letters" />
        </div>
      </div>
    </section>
  )
}
