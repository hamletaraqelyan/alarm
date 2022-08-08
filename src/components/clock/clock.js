import React, {Fragment, useEffect, useState} from 'react';
import Numbers from "../numbers/numbers";
import Hands from "../hands/hands";
import {formatAMPM, getAMPM} from "../../helpers";
import AlarmSound from "../../alarmSound.wav";
import HeadClock from "../headClock/headClock";
import "./clock.scss";
import AlarmInput from "../alarmInput/alarmInput";
import 'rc-time-picker/assets/index.css';

const alarmRing = new Audio(AlarmSound);

const Clock = () => {
    const [alarmTime, setAlarmTime] = useState('');
    const [activeAlarm, setActiveAlarm] = useState(false);
    const [ringing, setRinging] = useState(false);

    useEffect(() => {
        setActiveAlarm(!!alarmTime);
    }, [alarmTime])

    useEffect(() => {
        if (activeAlarm && alarmTime) {
            const interval = setInterval(() => {
                if (alarmTime === formatAMPM(new Date().getHours(), new Date().getMinutes())) {
                    setRinging(true);
                    alarmRing.play();
                    alarmRing.loop = true;
                    clearInterval(interval);
                }
            }, 1000);
        }
        else {
            alarmRing.pause();
            alarmRing.currentTime = 0;
            setRinging(false);
        }
    }, [activeAlarm, alarmTime])

    return (
        <Fragment>
            <div className="clock">
                <HeadClock ringing={ringing}/>
                <Numbers/>
                <div className='ampm'>
                    {getAMPM()}
                </div>
                <Hands/>
                <div className="legs"/>
            </div>
            <AlarmInput ringing={ringing} activeAlarm={activeAlarm} setAlarm={time => setAlarmTime(time)}/>
        </Fragment>
    );
};

export default Clock;
