const TableHoursCell = () => {
  return (
    <td className="border border-y-2">
      <table className="my-2 justify-self-stretch">
        <tr id="time-start">
          <th scope="col">Start</th>
          <th scope="col">End</th>
        </tr>
        <tr>
          <td className="text-center">
            <input type="time" className="" id="time-start-hours" />
          </td>
          <td className="text-center">
            <input type="time" className="" id="time-start-hours" />
          </td>
        </tr>
      </table>
    </td>
  );
};
export default TableHoursCell;
