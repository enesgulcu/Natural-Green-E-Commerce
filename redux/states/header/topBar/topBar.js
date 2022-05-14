import { createSlice } from "@reduxjs/toolkit";
export const languageSlice = createSlice({

    name:'dropDown',
    initialState:{
    
    languageDropDown: false,
    language:"English",
    moneyDropDown: false,
    money:"$",
    basketDropDown:false,
    menuSidebar:false,
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
        showMenuSidebar:(state)=>{
            state.moneyDropDown = false;
            state.languageDropDown = false;
            state.basketDropDown = false;
            state.menuSidebar = !state.menuSidebar;
        },
    }

});

export const {showLanguageDropDown, changeLanguage,closeLanguageDropDown, showMoneyDropDown, changeMoney, closeMoneyDropDown, showBasketDropDown, showMenuSidebar} = languageSlice.actions;
export default languageSlice.reducer;