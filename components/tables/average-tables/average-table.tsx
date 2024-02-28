import { DataTable } from "@/components/ui/data-table";
import { Token } from "@/constants/data";
import { columns } from "./columns";

interface AverageTableProps {
  data: Token[];
}

export const AverageTable: React.FC<AverageTableProps> = ({ data }) => {
  return <DataTable columns={columns} data={data} />;
};
