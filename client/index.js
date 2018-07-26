import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

// const Index = () => {
//   return <div>Hello React!</div>;
// };

ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.render(<MessageInput />, document.getElementById("messageinput"));