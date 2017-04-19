import * as types from '../actions/actionTypes';

export default function clickButtonReducer(state = 0, action) {
	switch (action.type) {
		case types.CLICK_BUTTON:
			return state + action.increment;
		default:
			return state;
	}
}
