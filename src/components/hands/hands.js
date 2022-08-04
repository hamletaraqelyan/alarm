import React, {useEffect, useState} from 'react';
import "./hands.scss"

const Hands = () => {
    const [hour, setHour] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");

    useEffect(() => {
        setTime();

        const interval = setInterval(setTime, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [])

    const setTime = () => {
        const timeNow = new Date();

        const hh = timeNow.getHours() * 30,
            mm = timeNow.getMinutes() * 6,
            ss = timeNow.getSeconds() * 6;

        setHour(`translateX(-50%) rotateZ(${hh + mm / 12}deg)`);
        setMinutes(`translateX(-50%) rotateZ(${mm}deg)`);
        setSeconds(`translateX(-50%) rotateZ(${ss}deg)`);
    }

    return (
        <div className='hands'>
            <div className="hour" style={{ transform: hour }}/>
            <div className="minute" style={{ transform: minutes }}/>
            <div className="second" style={{ transform: seconds }}/>
        </div>
    );
};

export default Hands;
