import {useEffect, useState} from "react";
import {Doctor} from "../Types/DoctorType";
import axios from "axios";

export const getAllRequest = () => {

    const [data, setData] = useState<Doctor[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8080/doctors/getAllDoctors?db=db1.txt"  ).then((response) => {
            console.log(response.data);
            setData(response.data);
        })
    }, []);
    return data;
}

export const getAllDoctors = (db: string) => {
   return axios.get("http://localhost:8080/doctors/getAllDoctors?db=" + db);
}

