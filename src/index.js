import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
// import { persistStore, persistReducer } from 'redux-persist'
// import { PersistGate } from 'redux-persist/integration/react'
// import storage from 'redux-persist/lib/storage'  //defaults to localStorage for web
// import reducer from './reducers/reducer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import Axios from 'axios'


import App from "./App"
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import BaseLayout  from './components/layouts/BaseLayout'
import Register from './components/Register'
import Login from './components/Login'
import SearchPodcast from './components/SearchPodcast'
import Menu  from './components/layouts/Menu'
import Following from './components/Following'
import Listened from './components/Listened'


// const persistConfig = {
//   key: "root",
//   storage
// }
// const persistedReducer = persistReducer(persistConfig, reducer)
// const store = createStore(
//   persistedReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
// let persistor = persistStore(store)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
    {/* <Provider store={store}> */}
   
      <Router>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/searchpodcast" element={<SearchPodcast />}></Route>
            
           
         
            <Route path="/menu" element={<Menu />} />
            <Route path="/following" element={<Following />} />
            <Route path="/listened" element={<Listened />} />
            
          </Routes>
        </BaseLayout>
      </Router>
      
    {/* </Provider> */}
    
    
  </>
)


