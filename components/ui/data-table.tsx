"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "./scroll-area";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import { Button } from "./button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <>
      <ScrollArea className="w-full h-[348px] md:h-[392px] p-3 md:p-6 rounded-lg border border-border bg-[rgba(0,0,0,0.70)]">
        <Table className="relative">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={cn(
                        "text-[12px] leading-5 tracking-[-0.25px] font-normal md:text-sm text-[rgba(250,250,250,0.50)] h-0 pb-2",
                        index > 0 && "text-center",
                      )}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell, index) => (
                    <TableCell
                      key={cell.id}
                      className={cn(
                        "text-sm tracking-[-0.25px] font-normal md:text-base py-4",
                        index > 0 && "text-center",
                      )}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter className="bg-transparent">
            <TableRow className="hover:bg-transparent">
              <TableCell colSpan={4} className="py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div>
                      <Icons.plus />
                    </div>
                    <p className="text-sm tracking-[-0.25px] font-normal md:text-base text-foreground">
                      Request to add a token
                    </p>
                  </div>
                  <Button className="rounded-[360px]">Request</Button>
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
}
