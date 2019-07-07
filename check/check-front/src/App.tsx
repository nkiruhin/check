import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { Profile } from './Componet/Profile'
import { AppSidebar } from './Componet/AppSidebar';

const App: React.FC = () => {
    initializeIcons(/* optional base url */);
    return (
        <div className="App">
            <BrowserRouter>
                <div className="header">
                    <HeadMenu />
                </div>
                <div className="body">
                    <div className="sidebar"><AppSidebar /></div>
                    <div className="content">
                        <Switch>
                            <Route exact={true} path='/' component={Main} />
                            <Route path='/profile' component={Profile} />
                            <Route path='/configuration' component={Configuration} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
            <div className="footer" />
        </div>
    </Fabric >
  );
}

export default App;
