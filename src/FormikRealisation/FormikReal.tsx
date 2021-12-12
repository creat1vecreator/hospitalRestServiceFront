import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import CardComponent from "../FirstRealisation/Common/CardComponent";
import React, {useEffect, useState} from "react";
import {Doctor} from "../FirstRealisation/Types/DoctorType";
import axios from "axios";
import {createDoctor, getAllDoctors, getAllRequest} from "../FirstRealisation/DAL/HandlerOfRequestsDoc";
import {Selection} from "../FirstRealisation/Common/Select";

const MySelect: React.FC<any> = ({label, onChange, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} onChange={(event) => {
                onChange(event)
                field.onChange(event);
            }} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};
export const SignUpForm = () => {

    const [arrayOfObjects, setData] = useState<Doctor[]>([]);
    useEffect(() => {
      getAllDoctors("db1.txt").then((response) => {
            console.log(response.data);
            setData(response.data);
        })
    }, []);

    const getDbData = (event: any) => {
        getAllDoctors(event.target.value).then((response) => {
            console.log(response.data);
            setData(response.data);
        })
    }
    return (
        <div>

        <Formik
            initialValues={{
                doctorId: 0,
                firstName: "",
                lastName: '',
                averageRate: 0,
                speciality: '',
                isInHospital: false,
                selectDb: 'db1.txt',
            }}

            validationSchema={Yup.object({
                doctorId: Yup.number().required('Введите id доктора'),

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

                    createDoctor(selectDb, submitData).then(r => console.log(r))
                        .then(() => {
                            getAllDoctors(selectDb).then(r => {
                                setData(r.data)
                            });
                        });

                alert(JSON.stringify(submitData, null, 1));
                    setSubmitting(false);

            }}
        >
            <Form>

                <label htmlFor="doctorId">ID</label>
                <Field name="doctorId" type="number"/>
                <ErrorMessage name="doctorId"/>

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



                <MySelect label={""} name={"selectDb"}  onChange={getDbData}>
                    <option value="">Выберите базу данных</option>
                    <option value="db1.txt"> База данных 1</option>
                    <option value="db2.txt"> База данных 2</option>
                </MySelect>

                <button type="submit">Submit</button>

            </Form>
        </Formik>


    {arrayOfObjects.map((Doctor: { doctorId: number; firstName: string; lastName: string; averageRate: number; speciality: string; isInHospital: boolean; }) =>
        <CardComponent
            db={selectDb}
            key={Doctor.doctorId}
            doctorId={Doctor.doctorId}
            firstName={Doctor.firstName}
            lastName={Doctor.lastName}
            averageRate={Doctor.averageRate}
            speciality={Doctor.speciality}
            isInHospital={Doctor.isInHospital}/>) }
        </div>
    );
}

