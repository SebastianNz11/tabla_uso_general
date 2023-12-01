import { React, useState } from "react";
import {
  GoMoveToEnd,
  GoMoveToStart,
  GoArrowRight,
  GoArrowLeft,
} from "react-icons/go";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

export const SimpleTable = ({ data, columns }) => {
  const [filtering, setFiltering] = useState("");

  const tabla = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });
  console.log(data);

  return (
    <div>
      <input
        type="text"
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
      />
      <table>
        <thead>
          {tabla.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>{header.column.columnDef.header}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {tabla.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => tabla.setPageIndex(0)}>
        <GoMoveToStart />
      </button>
      <button onClick={() => tabla.previousPage()}>
        <GoArrowLeft />
      </button>
      <button onClick={() => tabla.nextPage()}>
        <GoArrowRight />
      </button>
      <button onClick={() => tabla.setPageIndex(tabla.getPageCount() - 1)}>
        <GoMoveToEnd />
      </button>
    </div>
  );
};
