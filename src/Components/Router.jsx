import React from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Container from './Container'
import DetailedCountry from './DetailedCountry'
import NotFound from './NotFound'

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Container} exact strict/>
                    <Route path="/DetailedCountry" component={DetailedCountry} exact strict/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router