import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';


const App = () => (
    <div>
        <h1>Header One</h1>
    </div>
);

render(
    <App />,
    document.getElementById('root')
);