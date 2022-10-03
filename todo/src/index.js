import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import List from './List';
import Form from './Form';

import CyberGang from './CyberGang';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// 	<CyberGang/>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<div>
			<Form />
		</div>
		<div className="container">
			<List />
		</div>
	</>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
