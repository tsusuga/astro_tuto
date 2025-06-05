import type { MicroCMSQueries, MicroCMSListContent } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export type News = MicroCMSListContent & {
  title: string;
  content: string;
};

export const getNews = async (queries?: MicroCMSQueries) => {
  return await client.get({
    endpoint: "news",
    queries,
  });
};

export const getNewsDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.get({
    endpoint: "news",
    contentId,
    queries,
  });
};
