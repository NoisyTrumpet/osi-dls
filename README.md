# OSI-LIFE DLS (Design Language System)

[**Design System Library**](https://osi-dls.netlify.app/) for the [osilife.com](osilife.com) brand in general, it contains several **React components** such as Primary buttons, text fields, etc which can be imported in React, and are **self-contained** with styling, storybook stories, test suites, functional JSX code, etc.

## Frameworks

- Node Package Manager [link](https://www.npmjs.com/)
- Yarn [link](https://yarnpkg.com/)
- StorybookJS [link](https://storybook.js.org/)
- Adobe DSM integration [link](https://support.invisionapp.com/hc/en-us/articles/360028510211-Configuring-the-Storybook-DSM-Integration)
- React [link](https://reactjs.org/)
- Gitlab NPM registry [link](https://docs.gitlab.com/ee/user/packages/npm_registry/)
- Rollup JS [link](https://rollupjs.org/guide/en/)
- Jest [link](https://jestjs.io/)
- Eslint [link](https://eslint.org/)


## Local development

- Install npm package manager: `brew install node`.
- Install dependencies: `yarn`.
- Run storybook: `yarn storybook`.

## Stories

- All stories are in individual component directories.
- The file names must be in the format: `*.stories.js`.
- Here are the guidelines for writing a particular story: [link](https://storybook.js.org/docs/guides/guide-react/#step-4-write-your-stories).
<!-- 
## Widgets

- `widgets` are created under `src/widgets`
- they need to be added to `src/widgets/index.js` to be able to export them into the `/lib` folder
- to import them into another application `import { WIDGET_NAME } from "@dotcom/dls"` -->

## Linting

- `eslint` is used as a linting library.
- Run lint using `yarn lint`.
- Run lint and auto fix problems using `yarn lint:fix`.

## Testing

- `jest` is used as a testing library, for running the tests, and _mocking_ where needed.
- `enzyme` can be used at places to _shallow_ mount the components.
- Run tests using `yarn test`.
- Run tests with _live reload_ using `yarn test:watch`.

<!-- ## Versioning

- The NPM library is versioned using the `version` key in the `package.json` file.
- We use Semantic versioning, [link](https://semver.org/)
- **NOTE:** _Major_ and _Minor_ versions must be in sync with design.

## Building the NPM package

- Requires tagging the commit to prompt the Gitlab pipeline to build the NPM packages.
- The tag should be sumbitted as part of a push with other files. -->
<!-- 
## Deployment

- Relies on nginx config and assets in conf folder
- The default health endpoint is copied to both the health and dls/ready paths
- The DLS itself at the /dls path of the deployed site and is password protected with basic auth.

To stay out of the way of the unified CI pipeline, we have moved some stuff around:

- Don't use a 'config' folder. Call it conf.
- The ci is a local version of the global CI so we can override various jobs.
- As we ponder the multiple needs of the single ci file. Must make a real commit, tagging a skipped
- push won't do anything. -->
