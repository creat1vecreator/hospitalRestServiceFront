import {useEffect, useState} from "react";
import {Doctor} from "../Types/DoctorType";
import axios from "axios";

export const getAllRequest = (db: string) => {

    const [data, setData] = useState<Doctor[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8080/doctors/getAllDoctors?db=" + db).then((response) => {
            console.log(response.data);
            setData(response.data);
        })
    }, [db]);
    return data;
}

