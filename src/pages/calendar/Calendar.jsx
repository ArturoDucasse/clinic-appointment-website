import React, { useState } from "react";
import { Link } from "react-router-dom";

import { addMonths, subMonths, format } from "date-fns";

import { Button } from "semantic-ui-react";
import "./styles.css";

import RenderCells from "./components/renderCells";
import RenderDays from "./components/renderDays";
import RenderHeader from "./components/renderHeader";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date()); //Todo: Submit info to database

  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <div className="calendar">
      <RenderHeader
        prevMonth={prevMonth}
        format={format}
        currentMonth={currentMonth}
        nextMonth={nextMonth}
      />
      <RenderDays currentMonth={currentMonth} />
      <RenderCells
        onDateClick={onDateClick}
        currentMonth={currentMonth}
        selectedDate={selectedDate}
      />
      <Button positive size="large">
        <Link
          to="/time"
          style={{ color: "white" }}
          onClick={() => console.log("button clicked")}
        >
          Weiter zur Terminauswahl
        </Link>
      </Button>
    </div>
  );
};

export default Calendar;
