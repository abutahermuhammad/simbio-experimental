import PageRootComponent, {
  PageConfig,
  ClubsResponseType,
} from "./PageRootComponent";
import { memo } from "react";
import data from "@/assets/data/clubs.json";

/**
 * Retrieves data from the specified URL.
 *
 * @return {Promise<RequestResponseType>} The retrieved data.
 */
// async function getData(): Promise<ClubsResponseType> {
//     const res = await fetch("/data/clubs.json");
//     const data = await res.json();

//     return data;
// }

const UsersPage = async () => {
  // const data = await getData();
  const config: PageConfig = {
    analytics: false,
    settings: false,
    table: true,
  };

  return <PageRootComponent data={data} config={config} />;
};

export default memo(UsersPage);
