import { AverageTable } from "@/components/tables/average-tables/average-table";
import { tokens } from "@/constants/data";

export const Average = ({ id }: { id?: string }) => {
  return (
    <div
      className="relative md:h-[calc(100vh-32px)] rounded-[16px] md:rounded-[32px] flex justify-center"
      id={id}
    >
      <div className="bg-[url(/average_mobile_bg.webp)] md:bg-[url(/average.webp)] bg-cover bg-no-repeat inset-0 absolute z-0 rounded-[16px] md:rounded-[32px]" />
      <div className="flex flex-col py-10 px-2 items-center z-10 relative md:w-[68%] md:px-0">
        <div className="flex items-start">
          <h1 className="text-[28px] leading-[36px] md:text-[40px] md:leading-[48px] font-semibold mb-2 text-center">
            Average 3-year returns
            <span className="text-[12px] leading-5 md:text-base font-semibold pl-1 align-top">
              †
            </span>
          </h1>
        </div>
        <p className="text-sm font-normal md:text-base tracking-[-0.25px] text-center text-muted-foreground mb-6 md:mb-8">
          Automate in our backend based on EOM values
        </p>
        <AverageTable data={tokens} />
      </div>
    </div>
  );
};
