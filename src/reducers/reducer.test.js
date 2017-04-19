import expect from 'expect';
import clickButtonReducer from './reducer';

describe('reducer test', () => {
	it('should return expected state', () => {
		expect(clickButtonReducer(null, {
			type: 'CLICK_BUTTON',
			increment: 3
		})).toEqual(3);
	});
});
