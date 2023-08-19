
The Application Can be Built in 3 Broad Steps
The entire program must be viewed as the fusion of numerous tiny components. Take the Billing Application as an example:

Showcase goods
Utilize the search field to filter products
A user may include new products.
Show the entire amount due.
BROAD STEPS

![image](https://github.com/saikrishnaKrish/ReactWithJavascript/assets/82278675/8db8caf6-507d-415b-b192-35f457843bc7)

Step 1
We must first consider the potential components before we begin to code. The single responsibility principle design pattern, which states that a component should only carry out a single responsibility, is highly beneficial in this step. If you see that it is performing several tasks, break them down into separate components. In this case, our application has seven main parts. They are :

Application header
Add a new product
Filter bill (Search)
Product List
The title bar of the product list (part of component 4)
Single bill row of product list (part of component 4)
Total Bill Amount

Step 2
All of the components on the above list should be created as static components that accept props as data (attributes) and display it, so that view and rendering are our primary concerns rather than data flow. We must keep in mind that the Single Product Row component will be invoked from within a loop and will be reusable. Each iteration's bill details will be displayed based on the data that is currently available.

Step 3
Define data state and flow. The state should have the bare minimum of data and should be non-redundant. If we want total bill amount, we should not use total as separate attribute beacause it will be calculated on the basis of sum of all the individual products total. Due to the fact that the total is calculated instantly and we are confident that it is always consistent with the bill list, the issue of updating a separate total variable is avoided when a new bill is added or deleted.

###################################################################################################################
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
