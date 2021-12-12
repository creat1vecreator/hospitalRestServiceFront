import React from "react";
import {useState} from "react";
import {SelectType} from "../Types/SelectType";

export const Selection: React.FC<SelectType> = ({name, initValue, children, onChange}) => {
    const [option, setOption] = useState(initValue);

    return(<div>
        <select name={name}
                value={option}
                onChange={(event) => {
                    setOption(event.target.value)
                onChange(event)}}>
            {children}
        </select>
    </div>)
}
