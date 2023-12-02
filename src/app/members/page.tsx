import PageRootComponent, { MembersResponseType, PageConfig } from "./PageRootComponent";
import { memo } from "react";


/**
 * Retrieves data from the specified URL.
 *
 * @return {Promise<RequestResponseType>} The retrieved data.
 */
async function getData(): Promise<MembersResponseType> {
    const res = await fetch("http://localhost:3000/data/requests.json");
    const data = await res.json();

    return data;
}

const PageMembers = async () => {
    const data = await getData();
    const config: PageConfig = {
        analytics: true,
        settings: true,
        members: true,
    };

    return (
        <PageRootComponent data={data} config={config} />
    );
};


export default memo(PageMembers);
