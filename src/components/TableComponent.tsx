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
        <table className="w-full border">
          <TableHeaders />
          <tbody>{Array.from({ length: dataRows }).map(() => row)}</tbody>

          <div className="p-1">
            <button
              className="my-2 w-full justify-self-center rounded border-2 py-2"
              onClick={() => setDataRows(dataRows + 1)}
            >
              Add employee
            </button>
          </div>
        </table>
      </div>
    </>
  );
};

export default TableComponent;
