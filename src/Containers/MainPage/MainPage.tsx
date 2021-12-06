import React from "react";
import Input from "../../Common/input";
import {isNumber} from "../../Validators/numberValidator";
import {ifOnlyLetters} from "../../Validators/stringValidator";
import {CheckBox} from "../../Common/CheckBox";
import style from "./FormStyleMainPage.module.scss"
const MainPage = () => {

    return(<div className={style["form"]}>
            <form action="" id={"entity"}>

                <Input name= {"inputForId"} initValue={"Enter an ID"} validation={isNumber}/>
                <Input name= {"firstNameInput"} initValue={"Enter a name"}  validation={ifOnlyLetters}/>
                <Input name= {"secondNameInput"} initValue={"Enter a last name"} validation={ifOnlyLetters}/>
                <Input name= {"averageRateInput"} initValue={"Enter an average rate"} validation={isNumber}/>
                <Input name= {"specialityInput"} initValue={"Enter a speciality of a doctor"} validation={ifOnlyLetters}/>
                <CheckBox name={"isInHospitalChecbox"} defaultCheck={false} assignment={"На рабочем месте"}/>
            </form>
        </div>
    )
}
export default MainPage;