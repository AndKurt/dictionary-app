import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Result, NotFound } from '../pages';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="/*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};
