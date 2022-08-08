import React, {useState} from 'react';
import TimePicker from 'rc-time-picker';
import "./alarmInput.scss"

const AlarmInput = ({ringing, activeAlarm, setAlarm}) => {
    const [value, setValue] = useState('');
    const format = 'h:mm A';

    const onChange = (value) => {
        setValue(value ? value.format(format) : '');
    }

    return (
        <div className='setAlarm'>
            <TimePicker use12Hours
                        showSecond={false}
                        format={format}
                        onChange={onChange}
                        disabled={activeAlarm}
                        placeholder={"HH:MM AM/PM"}
            />
            <button onClick={() => (!activeAlarm && value) ? setAlarm(value) : setAlarm('')} className='setAlarmButton'>
                {activeAlarm ? ringing ? 'Stop Alarm' : 'Clear Alarm' : 'Set Alarm'}
            </button>
        </div>
    );
};

export default AlarmInput;
