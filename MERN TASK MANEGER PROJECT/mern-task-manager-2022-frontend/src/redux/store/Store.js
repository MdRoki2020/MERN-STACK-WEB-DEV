import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../state-slice/SettingSlice"

export default configureStore({
    reducer:{
        settings:settingsReducer,
    }
})