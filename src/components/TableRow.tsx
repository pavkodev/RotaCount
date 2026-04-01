const TableRow = (props: { cell }) => {
  const ROW_COUNT = 7;
  const cell = props.cell;
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
      {Array.from({ length: ROW_COUNT }).map(() => cell)}
    </tr>
  );
};
export default TableRow;
