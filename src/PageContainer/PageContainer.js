import React from 'react';
import styles from './PageContainer.module.css';
import MenuHeader from './MenuHeader/MenuHeader';
import Home from './HomePage/Home';
import Page2 from './Page2/Page2';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const PageContainer = () => {

    return (
        <Router>
            <div>
                <MenuHeader />
                <Switch>   
                    <Route exact path={['/', '/Home', '/Home/1', '/Home/2' ]}>
                        <Home />
                    </Route>
                    <Route exact path='/Page 2'>
                        <Page2 />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default PageContainer ;
