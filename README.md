# angularjs-webpack-boilerplate
#### Overview
The goal of this project is to provide boilerplate code that would be useful for creating a new project with AngularJS (1.6) and webpack (3.11).

Examples are provided to illustrate best practices for structuring component-based Javascript, HTML, and CSS.
#### Development guidelines
AngularJS specific guidelines for module dependencies:
- All modules may have **config** modules as dependencies
- **Components** may have **services** or other **components** as dependencies
- **Scenes** may have **components** as dependencies
- The **app** module is composed of **scenes** and global **components** (persistent site-wide menus, etc)
#### Instructions
- `npm install` to install node_modules
- `npm run start` to start app on development server (localhost:8080)