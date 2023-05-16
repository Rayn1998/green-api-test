import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [],
};

const messagesSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {
		setMessages(state, { payload }) {
			state.data = payload.reverse();
		},
		// addMessage(state, { payload }) {
		// 	state.data = [ ...state.data, payload ];
		// }
	},
});

export const { setMessages,addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;