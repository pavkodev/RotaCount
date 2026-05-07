import { useState } from "react";
import TableHoursCell from "./TableHoursCell";

//TODO: adding up total hours.
const TableRow = () => {
  const ROW_COUNT = 7;

  const hoursArray: number[] = [];
  const [totalHours, setTotalHours] = useState(0);
  console.log(hoursArray.toString());

  const addHours = (hours: number): void => {
    if (Number.isNaN(hours)) {
      hours = 0;
    }
    hoursArray.push(hours);
    console.log(hoursArray.toString());
    const sum = hoursArray.reduce((total, hour) => total + hour);
    setTotalHours(sum);
    console.log("total hours: " + totalHours + ", type: " + isNaN(totalHours));
  };

  return (
    <tr>
      <td className="border-y-2">
        <input
          type="text"
          id="in-employee"
          placeholder="Name"
          className="h-10 w-full pl-2"
        />
      </td>
      {Array.from({ length: ROW_COUNT }).map(() => (
        <TableHoursCell sendHours={addHours} />
      ))}
      <td className="border-y-2">
        <p className="p-1">{totalHours.toFixed(2)} hours</p>
      </td>
    </tr>
  );
};
export default TableRow;
