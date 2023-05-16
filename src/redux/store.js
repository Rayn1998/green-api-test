import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import messagesSlice from "./slices/messagesSlice";
import contactsSlice from "./slices/contactsSlice";
import numberSlice from "./slices/numberSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    messages: messagesSlice,
    contacts: contactsSlice,
    number: numberSlice,
  }
})

export default store;