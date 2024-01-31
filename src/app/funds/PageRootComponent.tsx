"use client";
import { FC, Suspense, memo } from "react";
import ChartMatrix from "@/components/charts/ChartMatrix";
import DashboardLayout from "@/components/ui/dashboard/DashboardLayout";
import ChartMemberActivity from "@/components/charts/ChartMemberActivity";
import ChartMemberAgeDemographic from "@/components/charts/ChartMemberAgeDemographic";
import DonationTable, {
  TDonationItem,
} from "@/components/funds/FundTable";

export type DonationResponseType = {
  data: TDonationItem[];
  offset: number;
  total: number;
  limit: number;
};

export type TPageConfig = {
  analytics?: boolean;
  settings?: boolean;
  table?: boolean;
};

interface PageRootComponentPropsType {
  data: DonationResponseType;
  config: TPageConfig;
}

const PageRootComponent: FC<PageRootComponentPropsType> = ({
  config,
  data,
}: PageRootComponentPropsType) => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1">
        {config.analytics && (
          <ChartMatrix>
            <ChartMemberActivity />
            <ChartMemberAgeDemographic />
          </ChartMatrix>
        )}

        <Suspense>
          <div className="px-[22px] pb-[22px]">
            <DonationTable
              title="Donor's list"
              description={`Showing ${data?.limit} of ${data?.total} donations`}
              data={data?.data}
            />
          </div>
        </Suspense>
      </div>
    </DashboardLayout>
  );
};

export default memo(PageRootComponent);