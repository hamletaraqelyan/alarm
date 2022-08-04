import React from 'react';

const HeadClock = ({ringing}) => {
    return (
        <div className="head">
            <div className="leftSide">
                <div className='top'/>
            </div>
            <div className={`centerSide ${ringing ? 'ringing' : ''}`}/>
            <div className="rightSide">
                <div className='top'/>
            </div>
        </div>
    );
};

export default HeadClock;
