import { usePwd } from "../hooks/usePwd"

type CheckboxProps = {
    functionName: string;
    name: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ functionName, name }: CheckboxProps) => {

    const { handlePwdUserPreferences: handleCheckbox } = usePwd()

    return (

        <>
            <input type="checkbox" className="h-4 w-4 cursor-pointer" onChange={ e => handleCheckbox({ name: functionName, content: e.target.checked })} />
            <h4 className="text-lg">{ name }</h4>
        </>
    
    )
}

export default Checkbox