# angularjs-webpack-boilerplate
![](https://david-dm.org/jeikei/angular-webpack-boilerplate.svg)
#### Overview
The goal of this project is to provide boilerplate code that would be useful for creating a new project with AngularJS (1.6) and webpack (3.11).

Examples are provided to illustrate best practices for structuring a component-based workflow. 

Includes routing, XHR requests, and dev/prod builds (with linting, minification, and source maps).

#### Development guidelines
AngularJS specific guidelines for module dependencies:
- All modules may have **config** objects as dependencies
- **Services** may be registered directly on **component** modules
- **Components** may have other **component** modules and **services** as dependencies
- **Page** modules may have **components** as dependencies
- The **app** module may have **pages** and global **components** (persistent site-wide menus, etc) as dependencies

#### Instructions
- `npm install` to install node_modules
- `npm run start` to start app on development server (localhost:8080)
- `npm run build` to generate production build