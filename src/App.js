import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main'
import Search from './components/Search/Search';
import Layout from './components/Layout/Layout';
import Details from './components/Details/Details';
import Ingredients from './components/Ingredients/Ingredients';
import Alphabet from './components/Alphabet/Alphabet';

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/search' element={<Search />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/search/details/:id' element={<Details />} />
          <Route path='/details/:id/ingredients/:name' element={<Ingredients/>}/>
          <Route path='/search/details/:id/ingredients/:name' element={<Ingredients/>}/>
          <Route path='/alphabet/:symbol' element={<Alphabet/>}/>
          <Route path='/alphabet/:symbol/details/:id' element={<Details/>}/>
          <Route path='/alphabet/:symbol/details/:id/ingredients/:name' element={<Ingredients/>}/>
          <Route path='/random/:random' element={<Details />}/>
        </Route>
      </Routes>
    </>

  );
};

export default App;