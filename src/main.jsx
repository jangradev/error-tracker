import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { worker } from '@uidotdev/react-query-api';
import IndexQuery from './ProblemsSolution/IndexQuery';

const queryClientObj = new QueryClient();

new Promise((res) => setTimeout(res, 100))
   .then(() =>
      worker.start({
         quiet: true,
         onUnhandledRequest: 'bypass',
      })
   )
   .then(() => {
      ReactDOM.render(
         <React.StrictMode>
            <QueryClientProvider client={queryClientObj}>
               <BrowserRouter>
                  <div className='container'>
                     <App />
                  </div>
               </BrowserRouter>
            </QueryClientProvider>
         </React.StrictMode>,
         document.getElementById('root')
      );
   });
