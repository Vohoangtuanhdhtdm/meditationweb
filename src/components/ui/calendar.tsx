import  { useState } from "react";
import ReactCalendar, { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";

export function Calendar({ className }: { className?: string }) {
  const [value, setValue] = useState<Date | null>(new Date());

  const handleChange: CalendarProps["onChange"] = (val) => {
    if (val instanceof Date) {
      setValue(val);
    }
  };

  return (
    <div className={className}>
      <ReactCalendar value={value} onChange={handleChange} />
    </div>
  );
}
