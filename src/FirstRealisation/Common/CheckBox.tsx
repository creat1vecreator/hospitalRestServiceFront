import React, {useState} from "react";
import {CheckBoxType} from "../Types/CheckBoxType";

export const CheckBox: React.FC<CheckBoxType> = ({name,defaultCheck, assignment }) => {
    const[checked, setChecked] = useState(defaultCheck);
    return(
        <label htmlFor={name}>
            <input type="checkbox" name={name} checked={checked} onChange={(event) => setChecked(event.target.checked)} />
            <p>{assignment}</p>
        </label>

    )
}