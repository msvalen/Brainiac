import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, QuizPage, NotFound } from './pages';

const App = () => {
    return(
    <>
    <h1>And so it begins!</h1>
        {/* <Header /> */}
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/:level/:category'>
                        <QuizPage />
                    </Route>
                    <Route >
                        <NotFound />
                    </Route>
                </Switch>
        {/* <Footer /> */}
    </>
    )};

export default App;