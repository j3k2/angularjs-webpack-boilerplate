# angularjs-webpack-boilerplate

The goal of this project is to provide boilerplate code that would be useful for creating a new project with AngularJS (1.6) and webpack (3.11).

Examples are provided to illustrate best practices for structuring component-based Javascript, HTML, and CSS.

AngularJS specific guidelines for dependencies:
- Services can only be dependencies for components
- Components are self-contained modules which may have services or other components as dependencies
- Scenes are composed of components
- The app module is composed of scenes and global components (site-wide menus, etc)