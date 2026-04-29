// import { useState } from "react";
import TableHoursCell from "./TableHoursCell";

//TODO: adding up total hours.
const TableRow = () => {
  const ROW_COUNT = 7;
  // const hoursArray: number[] = [];
  // const [totalHours, setTotalHours] = useState(0);

  // const addHours = (hours: number): number => {
  //   hoursArray.forEach((hours) => {
  //     setTotalHours(...totalHours, hours);
  //   });
  // };

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
        <TableHoursCell />
      ))}
      <td className="border-y-2">
        <p className="p-1">XX.XX hours</p>
      </td>
    </tr>
  );
};
export default TableRow;
