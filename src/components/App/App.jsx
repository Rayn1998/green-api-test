import { useEffect, useState } from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setUser } from 'redux/slices/userSlice';

import Main from 'components/Main/Main';
import Auth from 'components/Auth/Auth';
import PageNotFound from 'components/PageNotFound/PageNotFound';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      dispatch(setUser(userData));
    } else {
      navigate('/sign-in');
    }

  }, [localStorage.getItem('userData')]);

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='sign-in' element={<Auth />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </div>
  );
}

export default App;
