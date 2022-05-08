import { createSlice } from "@reduxjs/toolkit";
export const languageSlice = createSlice({

    name:'dropDown',
    initialState:{
    
    languageDropDown: false,
    language:"English",
    moneyDropDown: false,
    money:"$",
    },

    reducers:{

        showLanguageDropDown:(state)=>{
            state.moneyDropDown = false;
            state.languageDropDown = !state.languageDropDown;
        },
        changeLanguage:(state, action)=>{
            state.language = action.payload
        },
            
        showMoneyDropDown:(state)=>{
            state.languageDropDown = false;
            state.moneyDropDown = !state.moneyDropDown
        },
        changeMoney:(state, action)=>{
            state.money = action.payload
        },     
    }

});

export const {showLanguageDropDown, changeLanguage, showMoneyDropDown, changeMoney} = languageSlice.actions;
export default languageSlice.reducer;