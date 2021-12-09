import {Doctor} from "../Types/DoctorType";
import style from "./Card.module.scss"
import React from "react";

const CardComponent: React.FC<Doctor> = ({    doctorId,firstName, lastName, averageRate, speciality, isInHospital}) => {
    const[isEdit, ]
    return (
        <div className={style.card}>
            <h3> {doctorId}</h3>
            <h3>{firstName}</h3>
            <h3>{lastName}</h3>
            <h3>{averageRate}</h3>
            <h3>{speciality}</h3>
            <h3>{isInHospital}</h3>
        </div>
    );
};
export default CardComponent;