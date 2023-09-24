Next.js 13 Hello World
Download and Install Node.js LTS Version

Download and Install VS Code

Check out the Next.js 13 Installation Docs

Create a new Folder

Open the Command Line (Terminal) and run this command:

npx create-next-app .
this will create a Next.Js project

The app directory is where you define routes, create UI and colocate files such as components, tests, or stylesheets.

Read the following React Documentation:

React Essentials

Note: Our file extension is not jsx but tsx because we are using TypeScript

In the app/page.tsx file delete the previous React component and replace it with the following simple hello world component:
export default function Home() {
  return (
        <div>Hello World</div>
  );
}
We wrote a very simple hello world React component in the file. Note that it is a convention in Next.js that the html page in the director is called page.tsx

Start the development Server:
npm run dev
Open http://localhost:3000 with your browser to see the results locally.
The page auto-updates as you edit the file.

Note that the development server created a layout.tsx file by itself even if you delete it. This means the Next.js requires that there must be RootLayout component in the app folder for the app to function.

The app/layout.tsx and app/page.tsx files will be rendered when the user visits the root of your application.

The file app/layout.tsx is used to define UI that is shared across multiple pages. A layout accepts another layout or a page as its child. You can nest layouts to create nested routes.

The file app/page.tsx is used to define the unique UI of a route. Pages represent the leaf of the route and are needed for the path to be accessible.

Manual Deployment through CLI
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

npm i -g vercel
Now go to the Next.js project directory and give the following command to deploy to cloud:

vercel
In my case the web app is deployed to:

    https://step00-helloworld.vercel.app
Check out our Next.js deployment documentation and Vercel CLI Docs for more details.

Project config with vercel.json
vercel.json

example

Rewrite Example

Learn More
This is a Next.js project bootstrapped with create-next-app.

This project uses next/font to automatically optimize and load Inter, a custom Google Font.

To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!
