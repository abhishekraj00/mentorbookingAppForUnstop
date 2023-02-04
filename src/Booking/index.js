import React, { useEffect, useState } from "react";
import "./booking.css";

function Booking({ slots, setSlots }) {

  const dataArr =  {
    check: false,
    avilable: true,
    startTime: 9,
    endTime: 12,
  }
  const [changes,setChanges] = useState(dataArr);
  const [index,setIndex]  = useState("");

  useEffect(() => {
    let k = slots;
    k[index] = {
      ...k[index],
      ...changes,
    }
    setSlots([...k]);
  },[changes,index]);

  const handleChangeData = (e) =>{
    let kp = changes;
    if(e.target.name === "checkbox"){
      kp.check = e.target.checked 
    setChanges(kp)
    setIndex(e.target.id);
    }

    if(e.target.name === "startTime"){
      kp.startTime = e.target.value 
    setChanges(kp)
    setIndex(e.target.id);
    }

    if(e.target.name === "endTime"){
      kp.endTime = e.target.value 
    setChanges(kp)
    setIndex(e.target.id);
    }

  }



  return (
    <div className="slot_container">
      {slots.map((item, index) => {
        return (
          <div className="slot_day">
            <div>
              <input id={index} name="checkbox" type={"checkbox"} checked={item.check} onChange={handleChangeData}  />
              {item.day}
            </div>
            <div className="time_drop">
              <p>Start Time</p>
              <select id={index} name="startTime" className="select_drop" onChange={handleChangeData}>
                {item.startVal.map((ele) => {
                  return <option>{ele}</option>;
                })}
              </select>
            </div>
            <div className="time_drop">
              <p>End Time</p>
              <select id={index} name="endTime" onChange={handleChangeData} className="select_drop">
                {item.endVal.map((ele) => {
                  return <option>{ele}</option>;
                })}
              </select>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Booking;
