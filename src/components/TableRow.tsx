interface TableRowProps {
  productName: string;
  productPrice: number;
  quantity: number;
}

export default function TableRow({
  productName,
  productPrice,
  quantity,
}: TableRowProps) {
  const totalPrice = productPrice * quantity;

  return (
    <tr className="border border-table-border">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {productName}
      </th>
      <td className="px-6 py-4">{quantity}</td>
      <td className="px-6 py-4">{productPrice}</td>
      <td className="px-6 py-4">INR {totalPrice}</td>
    </tr>
  );
}
