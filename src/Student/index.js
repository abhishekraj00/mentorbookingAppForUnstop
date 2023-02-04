import { computeHeadingLevel } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./student.css";

function Student() {
  const dispath = useDispatch();
  const techers = useSelector((store) => store.teachers.name);
  const [select_teacher, setSelectedTeacher] = useState("");
  const [timeSlotData, setTimeSlot] = useState([]);

  useEffect(() => {
    if (select_teacher) {
      let tSlot = techers.filter((item) => item.name === select_teacher);
      setTimeSlot(tSlot[0].timeSlot);
      console.log(tSlot[0].timeSlot);
    }
  }, [select_teacher]);

  return (
    <div>
      <h1> Student Page</h1>
      <h4> Select Teacher For Booking Slot</h4>
      <div className="drop">
        {techers.map((item) => {
          return (
            <div onClick={(e) => setSelectedTeacher(e.target.innerText)}>
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="drop">
        {timeSlotData &&
          timeSlotData?.map((item) => {
            if(item.check){
                return <div>{item.day}</div>;
            }
          })}
      </div>
    </div>
  );
}

export default Student;
