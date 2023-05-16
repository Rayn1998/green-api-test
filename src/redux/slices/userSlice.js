import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: {},
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, { payload }) {
			state.data = payload;
		},
		unSetUser(state) {
			state.data = {};
		},
	},
});

export const { setUser, unSetUser } = userSlice.actions;
export default userSlice.reducer;