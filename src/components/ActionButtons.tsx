"use client";

import Checkbox from "./Checkbox";

import { usePwd } from "../hooks/usePwd";

const ActionButtons: React.FC = () => {
  const {
    pwdData: { length: passwordLength },
    handlePwdUserPreferences: updatePwdLength,
  } = usePwd();

  return (
    <section className="flex flex-col sm:flex-row p-7 gap-8 h-auto w-auto justify-center bg-slate-900 rounded-2xl">
      <div className="flex flex-col gap-3 justify-center items-center">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {passwordLength}
        </label>
        <input
          type="range"
          min="4"
          max="12"
          step="1"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          onChange={(e) =>
            updatePwdLength({ name: "length", content: e.target.value })
          }
          value={passwordLength}
        />
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
  );
};

export default ActionButtons;
