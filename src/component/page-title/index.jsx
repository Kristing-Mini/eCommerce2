import React from 'react';

export default class PageTitle extends React.Component{
	constructor(props){
		super(props);
	}

	componentWillMount(){
		document.title = this.props.title + 'eC-MMAIL';
	}

	render(){
		return(
			<div className="row">				
				<div className="col-md-12">
					<h1 class="page-header">{this.props.title}</h1>
				</div>
			</div>
		);
	}
}