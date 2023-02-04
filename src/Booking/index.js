import React, { useEffect, useState } from "react";
import "./booking.css";

function Booking({ slots, setSlots }) {
  const [slotBookingTeacher,setSlotBookingTeacher] = useState(slots)
  return (
    <div className="slot_container">
      {slotBookingTeacher.map((item, index) => {
        return (
          <div className="slot_day">
            <div>
              <input
                id={index}
                name="checkbox"
                type={"checkbox"}
                checked={item.check}
              />
              {item.day}
            </div>
            <div className="time_drop">
              <p>Start Time</p>
              <select id={index} name="startTime" className="select_drop">
                {item.startVal.map((ele) => {
                  return <option>{ele}</option>;
                })}
              </select>
            </div>
            <div className="time_drop">
              <p>End Time</p>
              <select id={index} name="endTime" className="select_drop">
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
