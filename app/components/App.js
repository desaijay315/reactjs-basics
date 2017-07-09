var React    =  require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Switch  = ReactRouter.Switch;
var Router = ReactRouter.BrowserRouter;
var Route  = ReactRouter.Route;
var Nav =  require('./Nav.js')

const App = ({props}) => {
  return (
  <Router>
  	<div className = 'container'>
  		<Nav />
  		<Switch>
  		<Route path='/popular' component ={Popular} />
  		<Route render	={() =>{
  			return <p>Not found</p>
  		}} />
  		</Switch>
   		
   	</div>
  </Router>
   
  )
}

module.exports = App;