import React from "react";

const TableComponent = () => {
  const addRow = () => {
    const row = `          <tr className="flex justify-between divide-x-2 align-middle">
            <td className="flex justify-center align-middle">
              <input
                type="number"
                max={23}
                className="w-10 border-2"
                name=""
                id=""
              />
              <p>:</p>
              <input type="number" className="w-10 border-2" name="" id="" />
              <p> - </p>
              <input type="number" className="w-10 border-2" name="" id="" />
              <p>:</p>
              <input type="number" className="w-10 border-2" name="" id="" />
            </td>
            <td className="flex justify-center align-middle">
              <input type="number" className="w-10 border-2" name="" id="" />
              <p>:</p>
              <input type="number" className="w-10 border-2" name="" id="" />
              <p> - </p>
              <input type="number" className="w-10 border-2" name="" id="" />
              <p>:</p>
              <input type="number" className="w-10 border-2" name="" id="" />
            </td>
            <td className="flex justify-center align-middle">
              <input type="number" className="w-10 border-2" name="" id="" />
              <p>:</p>
              <input type="number" className="w-10 border-2" name="" id="" />
              <p> - </p>
              <input type="number" className="w-10 border-2" name="" id="" />
              <p>:</p>
              <input type="number" className="w-10 border-2" name="" id="" />
            </td>
            <td className="flex justify-center align-middle">
              <input type="number" className="w-10 border-2" name="" id="" />
              <p>:</p>
              <input type="number" className="w-10 border-2" name="" id="" />
              <p> - </p>
              <input type="number" className="w-10 border-2" name="" id="" />
              <p>:</p>
              <input type="number" className="w-10 border-2" name="" id="" />
            </td>
            <td className="flex justify-center align-middle">
              <input type="number" className="w-10 border-2" name="" id="" />
              <p>:</p>
              <input type="number" className="w-10 border-2" name="" id="" />
              <p> - </p>
              <input type="number" className="w-10 border-2" name="" id="" />
              <p>:</p>
              <input type="number" className="w-10 border-2" name="" id="" />
            </td>
            <td className="flex justify-center align-middle">
              <input type="number" className="w-10 border-2" name="" id="" />
              <p>:</p>
              <input type="number" className="w-10 border-2" name="" id="" />
              <p> - </p>
              <input type="number" className="w-10 border-2" name="" id="" />
              <p>:</p>
              <input type="number" className="w-10 border-2" name="" id="" />
            </td>
          </tr>`;
    const table = document.querySelector("#table");
    table?.insertAdjacentHTML("beforeend", row);
  };

  return (
    <>
      <table id="table" className="m-2 w-[80%] border-2 bg-slate-200">
        <tr className="flex justify-between divide-x-2 align-middle">
          <td className="p-2">Sunday</td>
          <td className="p-2">Monday</td>
          <td className="p-2">Tuesday</td>
          <td className="p-2">Wednesday</td>
          <td className="p-2">Thursday</td>
          <td className="p-2">Friday</td>
          <td className="p-2">Saturday</td>
        </tr>
        <tr className="flex justify-between divide-x-2 align-middle">
          <td className="flex justify-center align-middle">
            <input
              type="number"
              max={23}
              className="w-10 border-2"
              name=""
              id=""
            />
            <p>:</p>
            <input type="number" className="w-10 border-2" name="" id="" />
            <p> - </p>
            <input type="number" className="w-10 border-2" name="" id="" />
            <p>:</p>
            <input type="number" className="w-10 border-2" name="" id="" />
          </td>
          <td className="flex justify-center align-middle">
            <input type="number" className="w-10 border-2" name="" id="" />
            <p>:</p>
            <input type="number" className="w-10 border-2" name="" id="" />
            <p> - </p>
            <input type="number" className="w-10 border-2" name="" id="" />
            <p>:</p>
            <input type="number" className="w-10 border-2" name="" id="" />
          </td>
          <td className="flex justify-center align-middle">
            <input type="number" className="w-10 border-2" name="" id="" />
            <p>:</p>
            <input type="number" className="w-10 border-2" name="" id="" />
            <p> - </p>
            <input type="number" className="w-10 border-2" name="" id="" />
            <p>:</p>
            <input type="number" className="w-10 border-2" name="" id="" />
          </td>
          <td className="flex justify-center align-middle">
            <input type="number" className="w-10 border-2" name="" id="" />
            <p>:</p>
            <input type="number" className="w-10 border-2" name="" id="" />
            <p> - </p>
            <input type="number" className="w-10 border-2" name="" id="" />
            <p>:</p>
            <input type="number" className="w-10 border-2" name="" id="" />
          </td>
          <td className="flex justify-center align-middle">
            <input type="number" className="w-10 border-2" name="" id="" />
            <p>:</p>
            <input type="number" className="w-10 border-2" name="" id="" />
            <p> - </p>
            <input type="number" className="w-10 border-2" name="" id="" />
            <p>:</p>
            <input type="number" className="w-10 border-2" name="" id="" />
          </td>
          <td className="flex justify-center align-middle">
            <input type="number" className="w-10 border-2" name="" id="" />
            <p>:</p>
            <input type="number" className="w-10 border-2" name="" id="" />
            <p> - </p>
            <input type="number" className="w-10 border-2" name="" id="" />
            <p>:</p>
            <input type="number" className="w-10 border-2" name="" id="" />
          </td>
        </tr>
        <button
          onClick={() => addRow()}
          className="w-full border-2 bg-gray-400 hover:bg-red-400/50"
        >
          +
        </button>
      </table>
      <button className="m-2 border-2 p-2 hover:translate-y-1" type="submit">
        Submit
      </button>
    </>
  );
};

export default TableComponent;
