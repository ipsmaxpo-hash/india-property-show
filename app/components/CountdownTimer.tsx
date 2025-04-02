"use client";

import React from "react";
import Countdown from "react-countdown";

const CountdownTimer: React.FC<{ eventDate: Date }> = ({ eventDate }) => {
  return (
    <Countdown
      date={eventDate}
      renderer={({ days, hours, minutes, seconds }) => (
        <div className="flex justify-between text-center mb-8">
          <div className="bg-blue-100 rounded p-3">
            <div className="text-3xl font-bold text-blue-600">{days}</div>
            <div className="text-base text-blue-600">Days</div>
          </div>
          <div className="bg-blue-100 rounded p-3">
            <div className="text-3xl font-bold text-blue-600">{hours}</div>
            <div className="text-base text-blue-600">Hours</div>
          </div>
          <div className="bg-blue-100 rounded p-3">
            <div className="text-3xl font-bold text-blue-600">{minutes}</div>
            <div className="text-base text-blue-600">Minutes</div>
          </div>
          <div className="bg-blue-100 rounded p-3">
            <div className="text-3xl font-bold text-blue-600">{seconds}</div>
            <div className="text-base text-blue-600">Seconds</div>
          </div>
        </div>
      )}
    />
  );
};

export default CountdownTimer;
