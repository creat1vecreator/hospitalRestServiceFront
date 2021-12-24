import {useEffect, useState} from "react";
import {Doctor} from "../Types/DoctorType";
import axios from "axios";


const url = "http://localhost:8080/doctors"
export const getAllRequest = () => {

    const [data, setData] = useState<Doctor[]>([]);
    useEffect(() => {
        axios.get(url + "/getAllDoctors?db=db1.txt"  ).then((response) => {
            console.log(response.data);
            setData(response.data);
        })
    }, []);
    return data;
}

export const getAllDoctors = (db: string) => {
   return axios.get(url + "/getAllDoctors?db=" + db);
}

export const createDoctor = (db: string, doctor: Doctor) => {
    return axios.post(url+ "/createDoctor", doctor, {params: {db}})
}

export const updateDoctor = (doctor: Doctor, db: string, doctorId: number) => {
    return axios.post(url + "/updateDoctor", doctor, {params: {doctorId: doctorId,
        db:db}});
}
export const deleteDoctor = (doctorId: number, db: string, ) => {
    console.log(doctorId, db)
    return axios.delete(url + "/deleteDoctors", {params:
            {db,
            doctorId}
    });
}