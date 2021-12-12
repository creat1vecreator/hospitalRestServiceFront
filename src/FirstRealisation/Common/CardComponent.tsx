import {Doctor} from "../Types/DoctorType";
import style from "./Card.module.scss"
import React, {useState} from "react";
import {Input} from "./Input";
import {ifOnlyLetters} from "../Validators/stringValidator";
import {CheckBox} from "./CheckBox";
import { isNumber } from "../Validators/numberValidator";



const CardComponent: React.FC<Doctor> = ({    doctorId,firstName, lastName, averageRate, speciality, isInHospital}) => {
    const [isEdit, setIsEdit] = useState(false);
    return (
        <div className={style.card}>
            {isEdit ? (<>
                <Input name={"doctorId"} placeholder={"Введите ID"} validation={isNumber} initValue=""/>
                <Input name={"firstName"} placeholder={"Введите имя"} validation={ifOnlyLetters} initValue={firstName}/>
                <Input name={"secondName"} placeholder={"Введите фамилию"} validation={ifOnlyLetters}
                       initValue={lastName}/>
                <Input name={"averageRate"} placeholder={"Введите средний рейтинг"} validation={isNumber}/>
                <Input name={"speciality"} placeholder={"Введите специальность"} validation={ifOnlyLetters}/>
                <CheckBox name={"isInHospital"} defaultCheck={false} assignment={"На рабочем месте"}/></>) :
                (<>
                <h3> {doctorId}</h3>
                <h3>{firstName}</h3>
                <h3>{lastName}</h3>
                <h3>{averageRate}</h3>
                <h3>{speciality}</h3>
                <h3>{isInHospital}</h3>
            </>)}
            <button onClick={() => {
                setIsEdit(prev => !prev)
            }}>Изменить
            </button>
        </div>
    );
};
export default CardComponent;