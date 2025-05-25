import {createSlice} from "@reduxjs/toolkit";


const Slice = createSlice({
    name: 'Name',
    initialState:{
        language: false,
        menuActive: true,
        theme:true,
        backToHome: false,
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
        ChangeBackToHome: (state) => {
            state.backToHome = (!state.backToHome);
        },
    }
});


export const {
    ChangeLanguage,
    ChangeMenuActive,
    ChangeTheme,
    ChangeBackToHome,
} = Slice.actions;
export default Slice.reducer;
