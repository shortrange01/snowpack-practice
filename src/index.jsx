import React from 'react';
import ReactDOM from 'react-dom';
// ReactDOM.render(<div>"HELLO REACT"</div>, document.getElementById('root'));
import App from './App.jsx';
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

if (import.meta.hot) {
    import.meta.hot.accept();
}
