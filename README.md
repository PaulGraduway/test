# Aliases

Aliases are defined in **jsconfig.json** under `compilerOptions => paths`. In order for the tester to locate aliased modules **jest.config.js** moduleNameMapper property needs to match the project aliases. All imports should utilize aliases except in the case of grouped files such as:

- ComponentName.js
- ComponentName.module.scss
- ComponentName.test.js
  <br>
  <br>

# Generate React CLI

We use _generate-react-cli_ as our snippet script to create React components. **generate-react-cli.json** config is located at the root of the work folder. `npm run component ComponentName` command generates following files:

- ComponentName.js
- ComponentName.module.scss
- ComponentName.test.js

Link: [GitHub README](https://github.com/arminbro/generate-react-cli "generate-react-cli")
<br>
<br>

# Jest

We use Jest to unit test complex functionality and components. To run the sweet of Jest tests run `npm run test`. Every component is generated with a .test.js file which contains a basic render test. The **jest.config.js** needs to contain the aliases of **jsconfig.json** in the moduleNameMapper property to find modules. To debug Jest test refer to the debugging section below.

Link: [Jest Documentation](https://jestjs.io/docs/getting-started "Jest documentation")
<br>
<br>

# MUI Core

Our team uses Material design as a baseline and we integrate changes on top of that. MUI Core is the React Material library we use to implement Material design components.

Link: [MUI Core Documentation](https://mui.com/material-ui/getting-started/overview/ "Material UI Core Documentation")

<br>
<br>
# Debugging

## VSCode Recipe

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "pwa-chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    },
    {
      "name": "Next.js: debug full stack",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev",
      "console": "integratedTerminal",
      "serverReadyAction": {
        "pattern": "started server on .+, url: (https?://.+)",
        "uriFormat": "%s",
        "action": "debugWithChrome"
      }
    },
    {
      "name": "Debug Jest Tests",
      "type": "node",
      "request": "launch",
      "runtimeArgs": [
        "--inspect-brk",
        "${workspaceRoot}/node_modules/.bin/jest",
        "--runInBand"
      ],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
