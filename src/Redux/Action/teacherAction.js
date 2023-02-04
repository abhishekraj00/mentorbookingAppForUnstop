import { ADD_TEACHER } from "./type";

const addTeacher = (data) =>{
    return {
        type:ADD_TEACHER,
        payload:data,
    }
} 
export {addTeacher}