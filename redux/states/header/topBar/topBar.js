import { createSlice } from "@reduxjs/toolkit";
export const languageSlice = createSlice({

    name:'dropDown',
    initialState:{
    
    languageDropDown: false,
    language:"English",
    moneyDropDown: false,
    money:"$",
    basketDropDown:false,
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
        
        showBasketDropDown:(state)=>{
            state.moneyDropDown = false;
            state.languageDropDown = false;
            state.basketDropDown = !state.basketDropDown;
        },
    }

});

export const {showLanguageDropDown, changeLanguage,closeLanguageDropDown, showMoneyDropDown, changeMoney, closeMoneyDropDown, showBasketDropDown} = languageSlice.actions;
export default languageSlice.reducer;