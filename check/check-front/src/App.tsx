import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Fabric } from 'office-ui-fabric-react'
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { AppSidebar } from './Componet/AppSidebar';

const App: React.FC = () => {
    initializeIcons(/* optional base url */);
    return (
    <Fabric>
        <div className="App">
            <BrowserRouter>
                <div className="header">

                </div>
                <div className="body">
                    <div className="sidebar">
                        <AppSidebar />
                    </div>
                    <div className="content">
                        
                    </div>
                </div>
            </BrowserRouter>
            <div className="footer" />
        </div>
    </Fabric>
  );
}

export default App;
