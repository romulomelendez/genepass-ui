import { CheckboxProps } from "@/types"

import { usePwd } from "../hooks/usePwd"

export const Checkbox: React.FC<CheckboxProps> = ({ functionName, name }: CheckboxProps) => {

    const { handlePasswordPreferencesArray } = usePwd()

    return (
        <>
            <input
              type="checkbox"
              className="h-4 w-4 cursor-pointer"
              onChange={ e => handlePasswordPreferencesArray({
                  preference: functionName,
                  isChecked: e.target.checked
              })}
            />
            <h4 className="text-lg">{ name }</h4>
        </>
    )
}