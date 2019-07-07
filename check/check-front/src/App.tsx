import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Profile } from './Componet/Profile'
import { AppSidebar } from './Componet/AppSidebar';
import { HeadMenu } from './Componet/HeadMenu';
import { Main } from './Componet/Main';
import { Configuration } from './Componet/Configuration';

const App: React.FC = () => {
    initializeIcons(/* optional base url */);
    return (
        <Fabric>
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
