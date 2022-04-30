import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Result, NotFound } from '../pages';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result/" element={<Result />} />
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
};
