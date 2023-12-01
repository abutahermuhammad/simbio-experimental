import DashboardLayout from "@/components/ui/dashboard/DashboardLayout";
import { memo } from "react";


const PageRootComponent = () => {
    return (
        <DashboardLayout>
            <h1>Teams</h1>
        </DashboardLayout>
    );
};


export default memo(PageRootComponent);