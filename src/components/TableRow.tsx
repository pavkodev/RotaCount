const TableRow = (props: { cell }) => {
  const ROW_COUNT = 7;
  const cell = props.cell;
  return (
    <tr>
      <td>
        <input
          type="text"
          id="in-employee"
          placeholder="Name"
          className="h-10 w-full"
        />
      </td>
      {Array.from({ length: ROW_COUNT }).map(() => cell)}
    </tr>
  );
};
export default TableRow;
