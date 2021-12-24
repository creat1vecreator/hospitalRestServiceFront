import { Doctor } from "../../Types/DoctorType";
import style from "./Card.module.scss";
import React, { useState } from "react";

import {deleteDoctor} from "../../DAL/HandlerOfRequestsDoc";
import {Edit} from "../isEditing";

const CardComponent: React.FC<Doctor & { db: string }> = (props) => {
    const doctor = {
        doctorId: props.doctorId,

        firstName: props.firstName,

        lastName: props.lastName,

        averageRate: props.averageRate,

        speciality: props.speciality,

        isInHospital: props.isInHospital,

    }
    const [isEdit, setIsEdit] = useState(false);
    return (
        <div className={style.card}>
            {isEdit ? (
                <>
                    <h3> {props.doctorId}</h3>
                    <div>
                        <Edit doctorId={props.doctorId} db={props.db} />

                    </div>
                </>
            ) : (
                <>
                    <h3>ID: {props.doctorId}</h3>
                    <h3>Имя: {props.firstName}</h3>
                    <h3>Фамилия: {props.lastName}</h3>
                    <h3>Рейтинг: {props.averageRate}</h3>
                    <h3>Специальность:{props.speciality}</h3>
                    <h3>На рабочем месте: {props.isInHospital ? "Да" : "Нет"}</h3>
                </>
            )}
            <button
                onClick={() => {
                    setIsEdit((prev) => !prev);
                }}
            >
                Изменить сущность
            </button>

            <button onClick={() => {deleteDoctor(props.doctorId, props.db).then(r => {
                console.log(r)})}}>
                Удалить сущность
            </button>
        </div>
    );
};
export default CardComponent;