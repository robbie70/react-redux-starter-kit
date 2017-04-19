//This component handles the App template used on every page
import React from 'react';
import Home from './home';
import Page from './page';

class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Home/>
				<Page/>
			</div>
		);
	}
}

export default App;
