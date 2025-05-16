import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Badge from "../ui/badge/Badge";
import Image from "next/image";

export type Records = {
  value: string;
  color?: "success" | "warning" | "error";
  icon?: string;
}[];

interface Props {
  title: string;
  columns: string[];
  records: Records[];
}
export default function BasicTable(props: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                {props.columns.map((columnName, i) => (<TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  key={`column-${i}`}
                >
                  {columnName}
                </TableCell>))}
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {props.records.map((columns, i) => (
                <TableRow key={i}>
                  {columns.map((cell, index) => (<TableCell className="px-5 py-4 sm:px-6 text-start" key={`cell-${index}`}>
                    <div className="flex items-center gap-3">
                      {cell.icon && <div className="w-10 h-10 overflow-hidden rounded-full">
                        <Image
                          width={40}
                          height={40}
                          src={cell.icon}
                          alt={cell.value}
                        />
                      </div>}
                      {cell.color && <Badge
                        size="sm"
                        color={cell.color}
                        variant="solid"
                      >
                        {cell.value}
                      </Badge>}
                      {!cell.color && <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {cell.value}
                        </span>
                      </div>
                      }
                    </div>
                  </TableCell>))}

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
