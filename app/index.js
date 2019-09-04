import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home/home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PodPage from './components/podpage/podPage';
import NotFound from './components/notFound'

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/podpage/:podid" component={PodPage} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));