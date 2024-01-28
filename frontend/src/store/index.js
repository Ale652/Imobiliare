import notificationReducer from "../features/notification/slice"
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        notification: notificationReducer
    }
})

export default store;