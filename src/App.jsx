
import React from 'react';
import Header from './components/Header';
import JobDetails from './components/JobDetails';
import CompanyInfo from './components/CompanyInfo';
import Sidebar from './components/Sidebar';
import Header1 from './components/Header1';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Header1 />
      <main className="">
        <div className="container mx-auto flex ">
          
          <div className="flex-1">
           
            <JobDetails />
            <CompanyInfo />
          </div>
          <div className="w-[23%]">
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
