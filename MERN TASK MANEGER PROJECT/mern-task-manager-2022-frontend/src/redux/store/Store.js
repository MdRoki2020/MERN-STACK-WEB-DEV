import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../state-slice/SettingSlice"
import taskReducer from "../state-slice/TaskSlice"

export default configureStore({
    reducer:{
        settings:settingsReducer,
        task:taskReducer,
    }
})


