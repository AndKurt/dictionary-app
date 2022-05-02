import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Result, NotFound } from '../pages';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:word" element={<Result />} />
      <Route path="/result/:word" element={<Result isResultPage />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
};
