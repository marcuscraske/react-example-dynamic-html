import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RenderHtml from "./RenderHtml";

const root = ReactDOM.createRoot(document.getElementById('root'));

fetch("./page.html")
    .then((response) => response.text())
    .then((html) => {
        root.render(
            <React.StrictMode>
                <App>
                    <RenderHtml>
                        {html}
                    </RenderHtml>
                </App>
            </React.StrictMode>
        );
    });



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

window.doThatMagic = function(html)
{
    root.render(
        <React.StrictMode>
            <App>
                <RenderHtml>
                    {html}
                </RenderHtml>
            </App>
        </React.StrictMode>
    );
}
