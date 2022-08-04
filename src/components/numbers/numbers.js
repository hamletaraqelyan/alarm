import React, {memo} from 'react';
import "./numbers.scss";

const Numbers = () => {
    const numbers = [...Array(12).keys()].map(num => num+1);

    return (
        <div className='numbers'>
            {numbers.map(number =>
                <div key={`${number}`} className={`numbersItem numbersItem${number}`}>
                   <div>{number}</div>
                </div>
            )}
        </div>
    );
};

export default memo(Numbers);
