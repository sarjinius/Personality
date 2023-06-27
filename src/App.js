import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { PageLoader } from './components/PageLoader';
import { AuthenticationGuard } from './components/AuthenticationGuard';
import { Admin } from './components/Admin';
import { Callback } from './components/Callback';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';
import { Profile } from './components/Profile';
import { Protected } from './components/Protected';
import { Public } from './components/Public';
import { Careers } from './components/Careers';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Faq } from './components/Faq';
import { Marketplace } from './components/Marketplace';

export const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/profile" 
        element={<AuthenticationGuard component={Profile} />} 
      />
      <Route path="/public" element={<Public />} />
      <Route 
        path="/protected" 
        element={<AuthenticationGuard component={Protected} />} 
      />
      <Route 
        path="/admin" 
        element={<AuthenticationGuard component={Admin} />} 
      />
      <Route path="/callback" element={<Callback />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/careers" element={<Careers />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/faq" element={<Faq />}/>
      <Route 
        path="/marketplace" 
        element={<Marketplace/>} 
      />
    </Routes>
  );
};