import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: '',
};

const numberSlice = createSlice({
	name: 'number',
	initialState,
	reducers: {
		changeNumber(state, { payload }) {
			state.data = payload;
		},
	},
});

export const { changeNumber } = numberSlice.actions;
export default numberSlice.reducer;