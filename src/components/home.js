import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';

class Home extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.onClickButton = this.onClickButton.bind(this);
	}

	onClickButton(e) {
		const increment = Number.parseInt(e.target.id);
		this.props.actions.clickButton(increment);
	}

	render() {
		return (
			<div>
				<button id="1" onClick={this.onClickButton}>Click + 1</button>
				<button id="2" onClick={this.onClickButton}>Click + 2</button>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
};

Home.propTypes = {
	actions: PropTypes.object.isRequired
};

export default connect(undefined, mapDispatchToProps)(Home);
