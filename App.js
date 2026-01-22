import React from "react";
import {createRoot} from "react-dom/client";

const heading = React.createElement('div', {}, [React.createElement('p', {}, "Hello World from React CDN"), React.createElement('h3', {}, "Nested element using react cdn")]);
const root = createRoot(document.getElementById("root"));
root.render(heading);