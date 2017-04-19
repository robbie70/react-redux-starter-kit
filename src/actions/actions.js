import * as types from './actionTypes';

export function clickButton(increment) {
	return {
		type: types.CLICK_BUTTON,
		increment
	};
}
