

###Typically, a JavaScript build toolchain consists of:

A package manager, like Yarn or npm. It enables you to access a vast ecosystem of third-party packages and simplifies installing or updating them.
A bundler (webpack in this case) lets you write modular code and bundle it into small packages to optimize load time.
A compiler, like Babel, lets you write modern JavaScript code that still works in older browsers.
Webpack is a module bundler (manages and loads independent modules). It gathers together dependent modules and compiles them into a single (file) bundle. You can configure this bundle using the webpack.config file or by using the command line while creating apps.

Babel is a JavaScript compiler and transpiler. It is employed to translate one source code into another. By doing this, you may use the new ES6 capabilities and JSX in your code while having babel translate it to standard ES5, which is supported by all browsers.




Install react and react-dom Our primary goal is to install ReactJS, including its dom packages, using the npm commands install react and react-dom, respectively. You can add the packages you install to the package.json file using the -save option.

npm install webpack webpack-dev-server webpack-cli --save
npm install babel-core babel-loader babel-preset-env babel-preset-react  --save-dev
npm i --save-dev html-webpack-plugin
