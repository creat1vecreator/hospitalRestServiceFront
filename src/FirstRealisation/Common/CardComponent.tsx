import { Doctor } from "../Types/DoctorType";
import style from "./Card.module.scss";
import React, { useState } from "react";

import { Edit } from "./isEditing";

const CardComponent: React.FC<Doctor & { db: string }> = (db, {
                                                              doctorId,
                                                              firstName,
                                                              lastName,
                                                              averageRate,
                                                              speciality,
                                                              isInHospital,

                                                          }) => {
    const [isEdit, setIsEdit] = useState(false);
    return (
        <div className={style.card}>
            {isEdit ? (
                <>
                    <h3> {doctorId}</h3>
                    <div>
                        <Edit doctorId={doctorId} db={db} />

                    </div>
                </>
            ) : (
                <>{console.log("doctorId", doctorId)}
                    <h3>ID: {doctorId}</h3>
                    <h3>Имя: {firstName}</h3>
                    <h3>Фамилия: {lastName}</h3>
                    <h3>Рейтинг: {averageRate}</h3>
                    <h3>Специальность:{speciality}</h3>
                    <h3>На рабочем месте: {isInHospital ? "Да" : "Нет"}</h3>
                </>
            )}
            <button
                onClick={() => {
                    setIsEdit((prev) => !prev);
                }}
            >
                Изменить сущность
            </button>
        </div>
    );
};
export default CardComponent;