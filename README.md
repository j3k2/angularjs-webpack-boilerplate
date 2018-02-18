# angularjs-webpack-boilerplate
![](https://david-dm.org/jeikei/angular-webpack-boilerplate.svg)
#### Overview
The goal of this project is to provide boilerplate code that would be useful for creating a new web application with AngularJS (1.6) and webpack (3.11). Examples are provided to illustrate best practices for structuring a component-based workflow. 

Shout out to [angular/angular-seed](https://github.com/angular/angular-seed) and [orizen/echoes](https://github.com/orizens/echoes) for inspiration. 

Features include:
- ES6 support with Babel
- Routing with `ui-router`
- XHR requests with `angular-local-storage` for local storage caching
- Separate webpack builds for development/production (with linting, minification, and source maps)
- Themeable styling with Sass; includes icon font (`foundation-icons`)

#### Development guidelines
Guidelines specific to module/dependency system in AngularJS:
- **Services** may be registered on **component modules**
- **Component modules** may have other **component modules** as dependencies
- **View modules** may have **component modules** as dependencies
- The **app** module may have **view modules** and parent **component modules** (components at the same level as `<ui-view>`, e.g., persistent menus) as dependencies

#### Instructions

- Start a new project without the repository's commit history:
`git clone --depth=1 https://github.com/jeikei/angularjs-webpack-boilerplate.git <your-project-name>`
- `npm install` to install node_modules
- `npm run start` to start app on development server (localhost:8080)
- `npm run build` to generate production build