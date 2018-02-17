# angularjs-webpack-boilerplate
![](https://david-dm.org/jeikei/angular-webpack-boilerplate.svg)
#### Overview
The goal of this project is to provide boilerplate code that would be useful for creating a new project with AngularJS (1.6) and webpack (3.11).

Examples are provided to illustrate best practices for structuring a component-based workflow. 

Features include:
- Routing with `ui-router`
- XHR requests with `angular-local-storage` for local storage caching
- Separate webpack builds for development/production (with ES6 linting, minification, and source maps)

#### Development guidelines
Guidelines specific to module/dependency system in AngularJS:
- **Config** objects may be imported into any file
- **Services** may be registered on **component modules**
- **Component modules** may have other **component modules** as dependencies
- **Page modules** may have **component modules** as dependencies
- The **app** module may have **page modules** and global **component modules** (persistent site-wide menus, etc) as dependencies

#### Instructions

- Start a new project without the repository's commit history:
`git clone --depth=1 https://github.com/jeikei/angularjs-webpack-boilerplate.git <your-project-name>`
- `npm install` to install node_modules
- `npm run start` to start app on development server (localhost:8080)
- `npm run build` to generate production build