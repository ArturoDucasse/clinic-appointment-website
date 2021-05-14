import React, { useState } from "react";
import { Link } from "react-router-dom";

import { addMonths, subMonths, format } from "date-fns";

import { Button } from "semantic-ui-react";
import "./styles.css";

import RenderCells from "./components/renderCells";
import RenderDays from "./components/renderDays";
import RenderHeader from "./components/renderHeader";
import formatAppointment from "../../utils/formatAppointment";

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

  const submitDate = () => {
    formatAppointment.destructureDate(selectedDate);
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
      <Link to="/time" style={{ color: "white" }}>
        <Button positive size="large" onClick={() => submitDate()}>
          Weiter zur Terminauswahl
        </Button>
      </Link>
    </div>
  );
};

export default Calendar;
