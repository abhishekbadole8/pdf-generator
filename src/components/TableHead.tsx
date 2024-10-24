export default function TableHead() {
  return (
    <thead className="text-black bg-white opacity-90 rounded-lg">
      <tr>
        <th scope="col" className="px-6 py-3">
          Product name
        </th>
        <th scope="col" className="px-6 py-3">
          Quanitty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Total Price
        </th>
      </tr>
    </thead>
  );
}
