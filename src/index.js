import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* Monsters Rolodex Project */

// It's perfectly fine to have a react app as part of the page, and not all of it. In the public folder, inside of the index.html file, it's possible to add other elements below or above <div id="root">, and the page won't break

// One of the main differences between a local host version of our project and a built version of our project, is optimization and minification - so that it will be served as fast as possible online. That's why it's not so important to worry about code efficiency when programming - in many cases, the build tool will potimize it for us

// Create react app uses Babel and Webpack (behind the scenes) in order to build and optimize our project. If we want to change the way that Babel and Webpack work, we need to run the npm eject script. That's usually not neccessary - Meta's React team have built the default build tool well, and they update it regularly. But it might be neccessary to eject in some projects and in some edge cases. The general rule is - "eject only as an absolutely last option"

// The manifest.json file, which is created inside the public folder, is used for progressive web apps (web apps that can behave like native desktop\native mobile apps)

// The index.js file is always the primary "gateway" to the react app, when building it using create react app

// A React component tag is actually NOT a tag, but a FUNCTION CALL - that's why in the child component itself, the HTML is returned from that function, right into where the React component tag is placed in the parent component. That's all that React is, basically - just a collection of modular functions\classes, that return HTML and other code and that can be moved around, reused, etc.

// Hooks VS classes - this is a hot topic in React. React components can be built with either JS classes or with React hooks, and each option has it's ups and it's downs. React hooks is a subject that is very specific to React, unlike classes which is a general programming concepr. It's important to know both options, because code bases might use either one, and this course teaches both

// All that react really does, as a framework, is to render and to rerender parts of a web app

// Creating class components: The things that class components contain, which functional components don't contain, are:

// 1. import { Component } from 'react';
// 2. class ComponentName extends Component
// 3. render() { return(ComponentContent) }

// Besided that, class components are more or less the same as function components

// To set the state in a class component, we need to use constructor() and super()

// React and objects: When using class components, the component state is stored as an object. React won't update the UI if something inside the state object changes. It will only update the UI if the state object is replaced with a completly new state object - and this is exactly what the setState() function does. It makes a "shallow copy" of the previous component state object, and adds\replaces the new component state object that is passed into setState()

// setState() is an async function - after it's called, React updates the DOM in an async and calculated way, in order to achieve the best performance. This means that commands that are batched together will usually happen simultaneously, in a synchronous way

// It's possible to add several callback functions as arguments to the setState() function. In this case, these "internal" callback functions will happen in an async way. Also, this way we can get access to both state and props inside of the "internal" callback functions, in case we need to use them there. This syntax of "internal" callback functions is the best practice way of using setState inside of class components

// When are React keys needed? Generally, whenever we create a list of some sort, including when automatically generating a list of elements using map() or a similar function. The main purpose of keys is to allow react to re-render only a part of a block of UI, and not all of it. A key should be placed at the highest level of the unique HTML content that is generated

// Class components are already being deprecated from React, so it's not neccessary to know memorize their syntax - unless I'll have to work on older react code
