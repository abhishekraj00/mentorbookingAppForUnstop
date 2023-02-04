import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Booking from "../Booking";
import { addTeacher } from "../Redux/Action";
import { slotTime } from "../util/slotData";
import './teacher.css';

function Teacher() {
  const dispath = useDispatch();
  const techers = useSelector((store) => store.teachers.name);

  const [slots,setSlots] = useState(slotTime);

  useEffect(() => {
    console.log("teacher", techers);
  }, [techers]);

  //current Teacher data
  const [teacher, setTeacher] = useState({
    name: "",
    timeSlot: "",
  });

  const handleChange = (e) => {
    setTeacher({
      name: e.target.value,
      timeSlot: slots,
    });
  };

  const handleDone = () => {
    //appending current teacher to allTeacher collection
    dispath(addTeacher(teacher));

    //reset current teacher state
    setTeacher({
      name: "",
      timeSlot: "",
    });
  };

  return (
    <div className="book_container">
      <div>
      <input
        placeholder="Teacher Username"
        value={teacher.name}
        onChange={handleChange}
      />
      <Booking slots={slots} setSlots={setSlots}/>
      </div>
      <button className="btn" onClick={handleDone}>Save</button>
    </div>
  );
}

export default Teacher;
