import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Suspense } from 'react';
import   './i18n';
import { Provider } from 'react-redux';
import  store  from './redux/Store';

  const loadingMarkup = (
    <div className="py-4 text-center">
      <h3>Loading..</h3>
    </div>
  )

ReactDOM.render(

  <Provider store={store} >

  <Suspense fallback={loadingMarkup}>

    <React.StrictMode>


      <App />


    </React.StrictMode>
   
  </Suspense>

  </Provider>,

document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
