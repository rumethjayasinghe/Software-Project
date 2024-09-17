import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="calendar-container">
            <Calendar
                onChange={setDate}
                value={date}
            />
            <p className="text-center">
                <span className="bold">Selected Date:</span> {date.toDateString()}
            </p>
        </div>
    );
};

export default CalendarComponent;
