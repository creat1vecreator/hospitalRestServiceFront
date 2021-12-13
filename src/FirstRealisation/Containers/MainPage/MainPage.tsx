import React, {useEffect, useState} from "react";
import {Input, InputRange} from "../../Common/Input";
import {isNumber} from "../../Validators/numberValidator";
import {ifOnlyLetters} from "../../Validators/stringValidator";
import {CheckBox} from "../../Common/CheckBox";
import {Doctor} from "../../Types/DoctorType";
import style from "./FormStyleMainPage.module.scss"
import {dbNames, typesOfRequests} from "../../Options/OptionsForMainPage";

// @ts-ignore
import {getAllRequest} from "../../DAL/HandlerOfRequestsDoc";



const MainPage = () => {

    const[stateOfDbSelect, setState] = useState(dbNames.db1);
    const[formState, setFormState] = useState({});
    console.log(formState);
    const arrayOfObjects: any = getAllRequest();

    // console.log(arrayOfObjects);
    return(<div className={style["form"]}>
            <form action="" id={"entity"} onChange={(event: any) => {
                setFormState((prevState) => ({...prevState, [event.target.name]: event.target.value}))
            }}>

                <Input name= {"doctorId"} placeholder={"Введите ID"} validation={isNumber}/>
                <Input name= {"firstName"} placeholder={"Введите имя"}  validation={ifOnlyLetters}/>
                <Input name= {"secondName"} placeholder={"Введите фамилию"} validation={ifOnlyLetters}/>
                <Input name= {"averageRate"} placeholder={"Введите средний рейтинг"} validation={isNumber}/>
                <Input name= {"speciality"} placeholder={"Введите специальность"} validation={ifOnlyLetters}/>
                <CheckBox name={"isInHospital"} defaultCheck={false} assignment={"На рабочем месте"}/>
                <InputRange name={"db"} min={1} max={2}/>
                {/*<Selection name={"selectTypeOfRequest"} initValue={"Выберите тип запроса"} options={typesOfRequests}/>*/}
                {/*<Selection name={"selectDb"} initValue={"Выберите базу данных"} options={typesOfDB}/>*/}



            </form>

            {/*{arrayOfObjects.map((Doctor: { doctorId: number; firstName: string; lastName: string; averageRate: number; speciality: string; isInHospital: boolean; }) =>*/}
            {/*    <CardComponent*/}
            {/*        db={stateOfDbSelect}*/}
            {/*        key={Doctor.doctorId}*/}
            {/*        doctorId={Doctor.doctorId}*/}
            {/*        firstName={Doctor.firstName}*/}
            {/*        lastName={Doctor.lastName}*/}
            {/*        averageRate={Doctor.averageRate}*/}
            {/*        speciality={Doctor.speciality}*/}
            {/*        isInHospital={Doctor.isInHospital}*/}
            {/*    />*/}
        </div>

    )
}
export default MainPage;