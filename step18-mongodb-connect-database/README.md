## Connect MongoDB No SQL Database

first you signup your account in mongodb atlas [signup your account](https://www.mongodb.com/cloud/atlas/register)

If you already signIn visit this page [login with mongodb..](https://account.mongodb.com/account/login?nds=true)

first you create a database with a free cluster then you connect your database to your peoject..

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Fetching Data on the Static Server
First [read this official fetching data on the server documentation](https://nextjs.org/docs/app/building-your-application/data-fetching#fetching-data-on-the-server)

Second [read this fetching static data](https://nextjs.org/docs/app/building-your-application/data-fetching#static-and-dynamic-data-fetches)

Note that all components by default are Server Components. Server Components always fetch data on the server.

Third [about static data fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#static-data-fetching)

By default, Next.js automatically does static fetches in Server Components. This means that the data will be fetched at build time, cached, and reused on each request.

Note that when you refresh/reload the page again and again it always shows the same quotation.

Fourth [read this article to review what you have learned about data fetching](https://dev.to/zenstack/a-deep-dive-into-next13-data-fetching-114n)

Fifth [watch this video](https://www.youtube.com/watch?v=JeaHyhcCVCE)

Note:

Next.js extends the native Web fetch() API to support caching.

fetch(https://..., { cache: 'force-cache' });

fetch(https://..., { cache: 'no-store' });

fetch(https://..., { next: { revalidate: false | 0 | number } } });

The default behavior is fetch(https://..., { cache: 'force-cache' }).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
