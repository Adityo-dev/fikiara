function Thead() {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase">
          Order ID
        </th>
        <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase">
          Course Name
        </th>
        <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase">
          date
        </th>
        <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase">
          Price
        </th>
        <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase">
          Status
        </th>
      </tr>
    </thead>
  );
}

export default Thead;
