import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Page extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div>
				{this.props.clickState}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		clickState: state.clickState
	};
};

Page.propTypes = {
	clickState: PropTypes.number
};

export default connect(mapStateToProps)(Page);
