import React, { useState } from "react";
import { Link } from "react-router-dom";

import { addMonths, subMonths } from "date-fns";

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
      <RenderHeader />
      <RenderDays />
      <RenderCells />
      <Button positive size="large">
        <Link to="" style={{ color: "white" }}>
          Weiter zur Terminauswahl
        </Link>
      </Button>
    </div>
  );
};

export default Calendar;
