import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, QuizPage, NotFound, HighScores, QuizSummary } from './pages';
import { Footer } from './layout'

const App = () => {
    return(
    <>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>                    
            <Route exact path='/scores/local'>
                <QuizSummary />
            </Route>
            <Route path='/scores'>
                <HighScores />
            </Route>
            <Route path='/:level/:category'>
                <QuizPage />
            </Route>
            <Route >
                <NotFound />
            </Route>
        </Switch>
        <Footer />
    </>
    )};

export default App;