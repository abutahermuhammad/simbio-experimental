"use client";
import { FC, memo } from "react";
import DashboardLayout from "@/components/ui/dashboard/DashboardLayout";
import ChartMatrix from "@/components/charts/ChartMatrix";
import ChartMemberStats from "@/components/charts/ChartMemberStats";
import ChartMemberActivity from "@/components/charts/ChartMemberActivity";
import ChartMemberAgeDemographic from "@/components/charts/ChartMemberAgeDemographic";
import ClubsTable, { TClubItem } from "@/components/clubs/ClubsTable";

export type ClubsResponseType = {
  data: TClubItem[];
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
  data: ClubsResponseType;
  config: TPageConfig;
}

const PageRootComponent: FC<PageRootComponentPropsType> = ({
  data,
  config,
}: PageRootComponentPropsType) => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-[22px] p-[22px]">
        {/* Render the admin analytics section if in analytics mode */}
        {config.analytics && (
          <ChartMatrix>
            <ChartMemberStats />
            <ChartMemberAgeDemographic />
            <ChartMemberActivity />
          </ChartMatrix>
        )}

        <ClubsTable
          title="Clubs Table"
          description={`Showing ${data?.limit} of ${data?.total} clubs`}
          data={data?.data}
          // columns={columns}
          // data={tasks}
          // filters={{ priorities, statuses }}
        />
      </div>
    </DashboardLayout>
  );
};

export default memo(PageRootComponent);
