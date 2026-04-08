import { useState } from "react";

const TableHoursCell = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  return (
    <td className="border border-y-2">
      <table className="my-2 justify-self-stretch">
        <tbody>
          <tr>
            <th scope="col">Start</th>
            <th scope="col">End</th>
          </tr>
          <tr>
            <td className="text-center">
              <input
                type="time"
                className="rounded-md border border-gray-400/50 p-1"
                id="time-start-hours"
                onChange={(e) => {
                  setStartTime(e.target.value);
                }}
              />
            </td>
            <td className="text-center">
              <input
                type="time"
                className="rounded-md border border-gray-400/50 p-1"
                id="time-end-hours"
                onChange={(e) => setEndTime(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <p className="pb-1 text-center">{startTime + " - " + endTime}</p>
    </td>
  );
};
export default TableHoursCell;
