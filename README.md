# angularjs-webpack-boilerplate
![](https://david-dm.org/jeikei/angular-webpack-boilerplate.svg)
#### Overview
The goal of this project is to provide boilerplate code that would be useful for creating a new project with AngularJS (1.6) and webpack (3.11).

Examples are provided to illustrate best practices for structuring a component-based workflow. 

Includes routing, XHR requests, and dev/prod builds (with linting, minification, and source maps).

#### Development guidelines
Guidelines specific to module/dependency system in AngularJS:
- **Config** objects may be imported into any file
- **Services** may be registered on **component modules**
- **Component modules** may have other **component modules** as dependencies
- **Page modules** may have **component modules** as dependencies
- The **app** module may have **page modules** and global **component modules** (persistent site-wide menus, etc) as dependencies

#### Instructions
- `npm install` to install node_modules
- `npm run start` to start app on development server (localhost:8080)
- `npm run build` to generate production build