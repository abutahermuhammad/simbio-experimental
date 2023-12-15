"use client";
import { memo } from "react";
import Layout from "@/components/ui/Layout";

const PageRootComponent = () => {
  return (
    <Layout>
      <h1>Users</h1>
    </Layout>
  );
};

export default memo(PageRootComponent);
