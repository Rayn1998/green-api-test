import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [],
};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		addContact(state, { payload }) {
			const { senderName, textMessage } = payload;
			state.data = [ ...state.data, { senderName, textMessage }];
		},
	},
});

export const { addContact } = contactsSlice.actions;
export default contactsSlice.reducer;