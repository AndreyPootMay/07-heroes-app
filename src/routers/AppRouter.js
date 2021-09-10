import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// Screen components
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { LoginScreen } from '../components/login/LoginScreen';

// Ui components
import { NavBar } from '../components/ui/NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />

                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />

                    <Route exact path="/" component={MarvelScreen} />
                </Switch>
            </div>
        </Router>
    );
}
