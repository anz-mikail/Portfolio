import {createSlice} from "@reduxjs/toolkit";


const Slice = createSlice({
    name: 'Name',
    initialState:{
        language: false,
        menuActive: true,
        theme:false,
    },
    reducers: {
        ChangeLanguage: (state) => {
            state.language = (!state.language);
        },
        ChangeMenuActive: (state) => {
            state.menuActive = (!state.menuActive);
        },
        ChangeTheme: (state) => {
            state.theme = (!state.theme);
        },
    }
});


export const {
    ChangeLanguage,
    ChangeMenuActive,
    ChangeTheme,
} = Slice.actions;
export default Slice.reducer;
