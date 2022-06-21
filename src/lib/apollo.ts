import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ogom1409x901w7hsqq1kbq/master',
  cache: new InMemoryCache()
})