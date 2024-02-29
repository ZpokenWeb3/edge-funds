"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Token } from "@/constants/data";
import { CustomResponsiveImage } from "@/components/custom-responsive-image";

export const columns: ColumnDef<Token>[] = [
  {
    header: "Token",
    id: "name",
    cell: (props) => (
      <div className="flex items-center gap-2">
        <CustomResponsiveImage
          className={props.row.original.name === "SEI" ? "rounded-full" : ""}
          src={props.row.original.icon_uri}
          alt={props.row.original.name}
          size={{
            modile: {
              width: props.row.original.name === "USDC, USDT, DAI" ? 32 : 18,
              height: 18,
            },
            desktop: {
              width: props.row.original.name === "USDC, USDT, DAI" ? 40 : 20,
              height: 20,
            },
          }}
        />
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
