import React, { useState } from 'react';
// import styles from './Counter.module.css'
// import PropTypes from 'prop-types';

export default function Counter(props) {

    const [counter, setCounter] = useState(props.number);
    const [value, setValue] = useState(props.number);

    const handleIncrement = () => {
        setCounter(counter + 1);
    };
    const handleDecrement = () => {
        setCounter(counter - 1);
    };

    const addNumber = (e) => {
        setCounter(counter + parseInt(value));
        setValue("");
    }

    let buttonStyle = { width: "80px", height: "50px", fontSize: "20px", backgroundColor: props.bg };

    return (
        <div className="">

            <input type="number" id="input" value={value} onChange={(e) => setValue(e.target.value)} className="input m-3" />
            <button className="btn btn-secondary add" onClick={addNumber} >ADD</button>

            {/* USING NORMAL CSS */}

            <div className='counter container justify-content-center align-items-center'>
                <div className="btn inc btn-primary m-4 justify-content-center" style={buttonStyle} onClick={handleIncrement}>+</div>
                <span id='counter-number' className='counter-number' style={{ fontSize: "20px", backgroundColor: "lightblue", borderRadius: "5px", padding: "10px" }}>{counter}</span>
                <div className="btn dec btn-primary m-4 justify-content-center" style={buttonStyle} onClick={handleDecrement}>-</div>
            </div>

            {/* USING MODULE CSS */}

            {/* <div className='counter container justify-content-center align-item-center'>
             <div className={`${styles.buttonStyle} btn inc btn-primary m-4 justify-content-center`} onClick={handleIncrement}>+</div>
             <span id='counter-number' className={`${styles.buttonStyle} counter-number`} >{counter}</span>
             <div className={`${styles.buttonStyle} btn dec btn-primary m-4 justify-content-center`} onClick={handleDecrement}>-</div>
         </div> */}
        </div>
    );
}

Counter.defaultProps = {
    number: "10",
    bg: "royalblue"
}