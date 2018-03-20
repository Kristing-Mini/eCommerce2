import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Redirect, Route,Link,Switch} from 'react-router-dom';

import Layout from 'component/layout/index.jsx';
//这是页面
import Home from 'page/home/index.jsx';


class App extends React.Component{
	render(){
		return(
			<Router>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/product" component={Home}/>
						<Route path="/product-category" component={Home}/>
						<Route path="/order" component={Home}/>
						<Route path="/user" component={Home}/>
					</Switch>
				</Layout>
			</Router>
		);
	}
}


ReactDom.render(
	<App/>
	,
    document.getElementById('app')
);