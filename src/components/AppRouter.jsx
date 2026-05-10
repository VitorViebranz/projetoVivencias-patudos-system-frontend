import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Animals from '../pages/Animals';
import Inventory from '../pages/Inventory';
import Finance from '../pages/Finance';
import AnimalForm from '../pages/AnimalForm';
import InventoryForm from '../pages/InventoryForm';
import FinanceForm from '../pages/FinanceForm';
import Admin from '../pages/Admin';
import UserForm from '../pages/UserForm';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/animals/add" element={<AnimalForm />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/add" element={<InventoryForm />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/finance/add" element={<FinanceForm />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/add" element={<UserForm />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;