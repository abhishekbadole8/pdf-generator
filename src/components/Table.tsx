import TableHead from "./TableHead";
import TableRow from "./TableRow";

export default function Table() {
  return (
    <div className="w-full my-6">
      <table className="w-full text-sm font-medium text-left rtl:text-right">
        <TableHead />

        <tbody className="text-textPrimary">
          <TableRow />

          {/* Total row */}
          <tr className="border border-table-border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            ></th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">+GST 18%</td>
            <td className="px-6 py-4">INR 10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
