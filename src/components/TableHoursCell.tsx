const TableHoursCell = () => {
  return (
    <td className="border-2">
      <table className="justify-self-stretch">
        <tr id="time-start">
          <th scope="col">Start</th>
          <th scope="col">End</th>
        </tr>
        <tr>
          <td>
            <input type="time" className="" id="time-start-hours" />
          </td>
          <td>
            <input type="time" className="" id="time-start-hours" />
          </td>
        </tr>
      </table>
    </td>
  );
};
export default TableHoursCell;
