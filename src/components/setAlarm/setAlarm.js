import React, {useEffect, useState} from 'react';
import TimePicker from 'react-time-picker';
import "./setAlarm.scss"
import {formatAMPM} from "../../helpers";

const SetAlarm = ({setAlarm, activeAlarm, ringing}) => {
    const [value, setValue] = useState('');

    const handleChangeTime = (time) => {
        const timeSplit = time?.split(':');
        timeSplit && setValue(formatAMPM(timeSplit[0], timeSplit[1]));
    }

    useEffect(() => {
        const amPm = document.querySelector('.react-time-picker__inputGroup__amPm');
        amPm.firstChild.textContent = 'AM/PM';
    }, [])

    return (
        <div className='setAlarm'>
            <TimePicker className={'timePicker'}
                        onChange={handleChangeTime}
                        disableClock
                        disabled={activeAlarm}
                        hourPlaceholder={"HH"}
                        minutePlaceholder={"MM"}
            />
            <button onClick={() => (!activeAlarm && value) ? setAlarm(value) : setAlarm('')} className='setAlarmButton'>
                {activeAlarm ? ringing ? 'Stop Alarm' : 'Clear Alarm' : 'Set Alarm'}
            </button>
        </div>
    );
};

export default SetAlarm;
