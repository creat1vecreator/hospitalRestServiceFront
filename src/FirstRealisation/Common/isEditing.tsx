import React, {useEffect, useState} from "react";
import {Doctor} from "../Types/DoctorType";
import {createDoctor, getAllDoctors, updateDoctor} from "../DAL/HandlerOfRequestsDoc";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

export const Edit: React.FC<any> = (doctorId: number, db) => {
    const [data, setData] = useState({});
    return (

            <Formik
                initialValues={{
                    doctorId: doctorId,
                    firstName: "",
                    lastName: '',
                    averageRate: 0,
                    speciality: '',
                    isInHospital: false,
                    selectDb: 'db1.txt',
                }}

                validationSchema={Yup.object({
                    firstName: Yup.string().required('Вы должны написать имя доктора'),

                    lastName: Yup.string().required('Вы должны написать фамилию доктора'),

                    averageRate: Yup.number().min(1).max(5).required("Введите число от 1 - 5"),

                    speciality: Yup.string().required("Введите специальность"),

                    isInHospital: Yup.boolean(),

                })}
                onSubmit={(values, {setSubmitting}) => {

                    const{
                        selectDb, ...submitData
                    } = values
                    updateDoctor(submitData, db, doctorId).then(r => console.log(r))
                        .then(() => {
                            getAllDoctors(selectDb).then(r => {
                                setData(r.data)
                            });
                        });

                    setSubmitting(false);


                }}

            >
                <Form>


                    <label htmlFor="firstName">Имя</label>
                    <Field name="firstName" type="text"/>
                    <ErrorMessage name="firstName"/>

                    <label htmlFor="lastName">Фамилия</label>
                    <Field name="lastName" type="text"/>
                    <ErrorMessage name="lastName"/>

                    <label htmlFor="averageRate">Средний рейтинг</label>
                    <Field name="averageRate" type="number"/>
                    <ErrorMessage name="email"/>

                    <label htmlFor="speciality">Специальность</label>
                    <Field name="speciality" type="text"/>
                    <ErrorMessage name="speciality"/>

                    <label htmlFor="isInHospital">На рабочем месте</label>
                    <Field name="isInHospital" type="checkbox"/>
                    <ErrorMessage name="isInHospital"/>


                    <button type="submit">Submit</button>

                </Form>
            </Formik>

)

}