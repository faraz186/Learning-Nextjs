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

## REST API Testing with Postman

[We will be using Simple Books REST APIs](https://github.com/vdespa/introduction-to-postman-course/blob/main/simple-books-api.md)

[Download and install the Postman App](https://www.postman.com/downloads/)

[We will be doing Introduction to Postman course](https://github.com/vdespa/introduction-to-postman-course)

[Watch Postman Beginner's Course - API Testing Video](https://www.youtube.com/watch?v=VywxIQ2ZXw4)

[Understanding the Basics of REST APIs](https://www.astera.com/type/blog/rest-api-definition/)

[Sending your first request](https://learning.postman.com/docs/getting-started/first-steps/sending-the-first-request/)

## Documentation:

[Building requests Documentation](https://learning.postman.com/docs/sending-requests/requests/)

[Grouping requests in collections](https://learning.postman.com/docs/sending-requests/intro-to-collections/)



## Invoking APIs in Code By Using Fetch

[How to Use Fetch with async/await](https://dmitripavlutin.com/javascript-fetch-async-await/)

[How to use the Fetch API with async/await](https://rapidapi.com/guides/fetch-api-async-await)

[Watch Complete Guide to fetch - with async await](https://www.youtube.com/watch?v=PwQb-y41Zys)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
