"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Token } from "@/constants/data";
import Image from "next/image";

export const columns: ColumnDef<Token>[] = [
  {
    header: "Token",
    id: "name",
    cell: (props) => (
      <div className="flex items-center gap-2">
        <div
          className={
            props.row.original.name === "USDC, USDT, DAI"
              ? "h-[18px] w-8 md:h-5 md:w-10 relative"
              : "w-[18px] h-[18px] md:h-5 md:w-5 relative"
          }
        >
          <Image
            src={props.row.original.icon_uri}
            alt={props.row.original.name}
            fill
            className="rounded-full"
          />
        </div>
        <p className="text-sm tracking-[-0.25px] font-normal md:text-base">
          {props.row.original.name}
        </p>
      </div>
    ),
  },
  {
    id: "year_APR",
    accessorFn: (row) => (row.year_APR ? `${row.year_APR}%` : "-"),
    header: "Average 3 year APR",
  },
  {
    id: "month_APR",
    accessorFn: (row) => (row.month_APR ? `${row.month_APR}%` : "-"),
    header: "Past 3-month APR (annualized)",
  },
  {
    accessorKey: "tvl",
    header: "Current TVL ($)",
  },
];
