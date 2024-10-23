import React from "react";

export default function TableRow() {
  return (
    <tr className="border border-table-border">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        name
      </th>
      <td className="px-6 py-4">5</td>
      <td className="px-6 py-4">10</td>
      <td className="px-6 py-4">INR 10</td>
    </tr>
  );
}
