const TableHeaders = ({ sundayStart }: { sundayStart: boolean }) => {
  return (
    <thead className="bg-gray-500 text-neutral-200">
      <tr>
        <th scope="col">Name</th>
        {sundayStart ? (
          <>
            <th scope="col">Sunday</th>
            <th scope="col">Monday</th>
            <th scope="col">Tuesday</th>
            <th scope="col">Wednesday</th>
            <th scope="col">Thursday</th>
            <th scope="col">Friday</th>
            <th scope="col">Saturday</th>
          </>
        ) : (
          <>
            <th scope="col">Monday</th>
            <th scope="col">Tuesday</th>
            <th scope="col">Wednesday</th>
            <th scope="col">Thursday</th>
            <th scope="col">Friday</th>
            <th scope="col">Saturday</th>
            <th scope="col">Sunday</th>
          </>
        )}

        <th className="italic" scope="col">
          TOTAL
        </th>
      </tr>
    </thead>
  );
};
export default TableHeaders;
