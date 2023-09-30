## Getting Started

### Install the project

You need to install dependencies:

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

To build this project simply run:

```bash
yarn build
```

Creates an optimized production build of the application:

```bash
yarn start
```

Apply prettier formatter to the whole project:

```bash
yarn format
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Conventions and Best Practices

Make sure that you install and enable [Prettier](https://prettier.io/) in the IDE / Editor of your choice. Allow
prettier to format files of these types: `js, jsx, ts, tsx, css, scss, html`

Please follow this React conventions:

- Always use functional components
- Do not use React class components
- Pages that represent a resource must start with the resource name, for example: `UserList`, `UserDetails`
  , `UserCreate`, etc.
- Components are styled using the `tailwind` approach

Please follow these code styles:

- Do not use `var` or `function` keywords
- Do not add any new `.js`, `.jsx` files to the project

Please follow these Git conventions:

- Make sure that you always work on a separate branch
- Branch name must have this format `__type__/__ticket__-your-title`, for example: `feature/1234-feature-name`
- Commit messages must have this format: `#__ticket__: Your description`, for example:  `#1234: Commit message` to
  utilize Jira work item link feature
- You can use any of these types: `feature`, `hotfix`, `release`, `support` for branch names
- Pull request title must have this format: `__ticket__: Your title`, for example `1234: Feature name`
- Pull requests that do not follow these rules **will not be merged**
- Make sure to link your work items properly
