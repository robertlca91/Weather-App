
import React from 'react';

const Hours = () => {

    const time=new Date()
    const hour=time.getHours().toLocaleString()
    const minut=time.getMinutes().toLocaleString()
    const year=time.getFullYear()
    const day=time.getDate().toLocaleString()

    const dayWeek=[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    ]

const numberDay=dayWeek[time.getDay()]
    // console.log(time,hour, minut, year,day, numberDay)
    return (
        <div>
            <p>{year} {day} {numberDay} {`${hour<10 ? 0 + hour:hour}`} : {`${minut<10? 0+minut:minut}`}</p>
            
        </div>
    );
};

export default Hours;