import React, {useState} from "react";

import {InputProps} from "../Types/InputType";

const Input: React.FC<InputProps> = ({name, initValue, validation, }) => {
    let [value, setValue] = useState(initValue);
    const [error, setError] = useState("");
    // @ts-ignore
    return(
        <div>
            <input type="text" name={name} value={value}  onChange={(evt) => setValue(evt.target.value)} onBlur={(evt) => {
                if (validation) {
                    setError(validation(evt.target.value));
                }
            }}/>
            {value} <br/>
            {error}

        </div>
    )
}
export default Input;
