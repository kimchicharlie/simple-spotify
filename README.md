# Simple Spotify

This project is a simple version of Spotify developed in less than 24 hours for a technical assessment.

# Launch the project

1/ Make sure that you have installed the [Node.js LTS](https://nodejs.org/en/).

2/ Use [yarn](https://classic.yarnpkg.com/en/docs/install) to install dependencies `yarn install`.

3/ Launch the dev server `yarn start`.

# Libraries used

### React Native / Expo / React

**Why**: We use React Native to develop cross-platform application with Javascript. It's the core component. We use Expo because it is now the recommended way to kickstart a React Native application ( as create-react-native-app wash deprecated in favor of expo ).
**Where**: It's the core component, so basically everywhere.

### React-Navigation

**Why**: Recommended way to handle application navigation. It was actually coming with the recommended `expo` starter.
**Where**: Mostly in `./navigation` folder

### Ky

**Why**: [Ky](https://github.com/sindresorhus/ky) is a HTTP client base on the native Fetch API. It allows us to write simpler code thanks to its simple API and shortcuts.
**Where**: Wherever we need to make an HTTP call to an external service.

### Redux

**Why**: Redux is a great way to handle global state
**Where**: Wherever we need to store data that should be available on any view for the current navigation.

### redux-thunk

**Why**: redux-thunk makes it easier to handle side-effects.
**Where**: Redux thunk is a middleware mounted in the Redux store during its creation.

### react-redux

**Why**: react-redux allows us to access the Redux reducers among the application.
**Where**: The Provider wraps the whole application. Also, we use the useDispatch and useSelector hooks as an alternative to mapDispatchToProps and mapStateToProps. It makes the code a bit easier to understand.

# Tools used

### Eslint

**Why**: Great way to enforce good practices in the codebase. We are using the [airbnb config](https://github.com/airbnb/javascript).
**Where**: Everywhere

### Prettier

**Why**: Avoid incorrectly formatted code. Help developers focusing on what matters the mosts.
**Where**: Everywhere

# Architecture

## root files

The root files are mainly configuration files and documentation.

- .eslintrc.js: eslint config, allows you to configure the coding style wanted for the project
- .gitignore: git ignores the files/folders listed here
- .prettierrc.js: prettier config, allows you to define the desired code formatting
- app.json: contains the default config for the application
- app.config.js: here you can dynamically modify the config from app.json using JS :D
- babel.config.js: Babel config, allows you to setup transpiling

## app folder

The "app" folder basically contains the source code of the React application. This folder is organized as such:

### modules

#### Structure

Contains folders centralizing files/folders of same entity.

- common: centralizes all generic components.

#### Modules content

- screens: A component mounted on a screen, the higher level component (root component excluded).

- components: Low level components, usually dump components.

- helpers.js: Small helpers functions for the module.

- index.js: Reducer and action creators.

### services

Clients for external services interactions. Ex: the musicApi is instanciated only once on the runtime.
