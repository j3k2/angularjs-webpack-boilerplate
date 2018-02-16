# angularjs-webpack-boilerplate

#### Overview
The goal of this project is to provide boilerplate code that would be useful for creating a new project with AngularJS (1.6) and webpack (3.11).

Examples are provided to illustrate best practices for structuring a component-based workflow. 

Includes routing, XHR requests, and dev/prod builds.

#### Development guidelines
AngularJS specific guidelines for module dependencies:
- All modules may have **config** modules as dependencies
- **Component** modules must have **services** registered on them directly
- **Components** may have other **component** modules as dependencies
- **Page** modules may have **components** as dependencies
- The **app** module is composed of **pages** and global **components** (persistent site-wide menus, etc)

#### Instructions
- `npm install` to install node_modules
- `npm run start` to start app on development server (localhost:8080)
- `npm run build` to generate production build