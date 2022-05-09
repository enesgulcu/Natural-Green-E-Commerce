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
        closeLanguageDropDown :(state)=>{
            state.languageDropDown = false;
        },

  
        showMoneyDropDown:(state)=>{
            state.languageDropDown = false;
            state.moneyDropDown = !state.moneyDropDown
        },
        changeMoney:(state, action)=>{
            state.money = action.payload
        },  
        closeMoneyDropDown :(state)=>{
            state.moneyDropDown = false;
        },   
    }

});

export const {showLanguageDropDown, changeLanguage,closeLanguageDropDown, showMoneyDropDown, changeMoney, closeMoneyDropDown} = languageSlice.actions;
export default languageSlice.reducer;