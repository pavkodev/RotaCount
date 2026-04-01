import React, { useState } from "react";
import TableHeaders from "./TableHeaders";
import TableRow from "./TableRow";
import TableCell from "./TableHoursCell";

const TableComponent = () => {
  const row = <TableRow cell={<TableCell></TableCell>} />;
  const [dataRows, setDataRows] = useState(1);
  return (
    <>
      <div className="m-4 flex flex-col justify-center align-middle">
        <table className="w-full border-2">
          <TableHeaders />
          <tbody>{Array.from({ length: dataRows }).map(() => row)}</tbody>
        </table>
        <div className="m-4 flex justify-start align-middle">
          <button
            className="w-full rounded border-2 border-black bg-sky-600 p-2 py-3 font-bold text-white transition-all hover:translate-y-0.5 hover:bg-sky-700"
            onClick={() => setDataRows(dataRows + 1)}
          >
            Add employee
          </button>
        </div>
      </div>
    </>
  );
};

export default TableComponent;
