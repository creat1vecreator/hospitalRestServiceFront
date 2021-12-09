import React, {useState} from "react";

import {InputProps, InputRangeProps} from "../Types/InputType";

export const Input: React.FC<InputProps> = ({ name, placeholder, validation}) => {
    let [value, setValue] = useState("");
    const [error, setError] = useState("");
    // @ts-ignore
    return(
        <div>
            <input name={name} placeholder={placeholder} value={value}
                   onChange={(evt) => setValue(evt.target.value)}
                   onBlur={(evt) => {
                if (validation) {
                    setError(validation(evt.target.value));
                }
            }}/>
            {value} <br/>
            {error}

        </div>
    )
}

export const InputRange: React.FC<InputRangeProps> = ({name, min, max }) => {
    const[number, setNumber] = useState(1);

    return (
        <input type={"range"} min ={min} max={max}/>
    )
}
