import React, { useState, useEffect } from 'react';

import "../../styles/dommyCountdown.css"

const CountdownTimer = () => {
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const endDate = new Date("2023-05-11"); // replace this with your offer end date
            const currentDate = new Date();

            const totalSeconds = Math.floor((endDate - currentDate) / 1000);

            if (totalSeconds <= 0) {
                clearInterval(interval);
            } else {
                const days = Math.floor(totalSeconds / 3600 / 24);
                const hours = Math.floor((totalSeconds / 3600) % 24);
                const minutes = Math.floor((totalSeconds / 60) % 60);
                const seconds = Math.floor(totalSeconds % 60);

                setCountdown({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="countdown-timer">
            <p>The offer ends in:</p>
            <p>
                <span>{countdown.days} d</span>
                <span>{countdown.hours} h</span>
                <span>{countdown.minutes} m</span>
                <span>{countdown.seconds} s</span>
            </p>
        </div>

    );
};

export default CountdownTimer;
