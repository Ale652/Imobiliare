import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

export const notificationSlice = createSlice({
    name: "notification",
    initialState: initialState,
    reducers: {
        showNotification: (state, { payload }) => {
            state.show = true;
            state.message = payload.message;
            state.severity = payload.severity;
        }
    }
})