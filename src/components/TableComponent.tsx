import { useState } from "react";
import TableHeaders from "./TableHeaders";
import TableRow from "./TableRow";

const TableComponent = () => {
  const row = <TableRow />;
  const [dataRows, setDataRows] = useState(1);
  const [isSundayStart, setIsSundayStart] = useState(false);
  return (
    <>
      <div className="m-4 flex flex-col justify-center align-middle">
        <div>
          <input
            className="m-2 mr-0 scale-120 transition-all active:scale-150"
            type="checkbox"
            onChange={() => setIsSundayStart(!isSundayStart)}
          />
          <label htmlFor="chkbx-sunday-start"> Sunday Start</label>
        </div>
        <table className="w-full border-2">
          <TableHeaders sundayStart={isSundayStart} />
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
