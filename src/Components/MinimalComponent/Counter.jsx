import React, { useEffect, useState } from 'react';
import './Counter.css'; // Import CSS file

const Counter = ({ start, end, duration, suffix }) => {
    const [currentValue, setCurrentValue] = useState(start);
    const [animateDirection, setAnimateDirection] = useState('down');

    useEffect(() => {
        const increment = end > start ? 1 : -1;
        let currentNumber = start;

        const interval = setInterval(() => {
            if (currentNumber !== end) {
                currentNumber += increment;
                setCurrentValue(currentNumber);

                // Toggle animation direction based on increment
                setAnimateDirection(increment > 0 ? 'down' : 'up');
            } else {
                clearInterval(interval); // Stop the interval when we reach the target number
            }
        }, duration);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [start, end, duration]);

    return (
        <div className={`counter-container ${animateDirection}`}>
            <div className="number">{currentValue}&nbsp;{suffix && suffix}</div> {/* Add the suffix here */}
        </div>
    );
};

export default Counter;
