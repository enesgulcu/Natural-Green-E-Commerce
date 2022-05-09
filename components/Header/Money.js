import React,{useEffect, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import {MoneySection, MoneyButton, DropDownMoney, MoneyList, ChooseMoney} from '../../styles/Header/topBar';
import {showMoneyDropDown, changeMoney, closeMoneyDropDown} from "../../redux/states/header/topBar/topBar.js";
import { motion, AnimatePresence } from "framer-motion";

export default function Money() {
    const dispatch = useDispatch();
    const moneyDropDownCheck = useSelector((state) => state.topBar.moneyDropDown);
    const Money = useSelector((state) => state.topBar.money);


    const ref = useRef();

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (!ref.current.contains(event.target)) {
          dispatch(closeMoneyDropDown());
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
    },[ref]);

  return (    
    <>
       <MoneySection ref={ref}>
            <MoneyButton onClick={() => dispatch(showMoneyDropDown())}>
              <h5>{Money}</h5>
            </MoneyButton>
              <AnimatePresence>
              {moneyDropDownCheck && (
                <motion.div 
                //initial:animasyon başlangıç değerleri
                //animate:animasyonun bitiş değerleri
                //exit:animasyonun geri sarma final değerleri
                //transition:animasyonun gerçekleşme süresi
                //Not: "motion.div" ile hareket edecek olan yapıyı sarmalla!
                initial={{ opacity: 0, x:-45 }}
                animate={{ opacity: 1, y: 30 }}
                exit={{ opacity: 0, y:0 }}
                transition={{duration: 0.5 }}>
                <DropDownMoney>
                  <ChooseMoney>
                    <MoneyList $isActive={Money ==="$"} onClick={() => dispatch(changeMoney("$"), dispatch(showMoneyDropDown()))}>                  
                    $ Dolar
                    </MoneyList>
                    <MoneyList $isActive={Money ==="₺"} onClick={() => dispatch(changeMoney("₺"), dispatch(showMoneyDropDown()))}>
                    ₺ TL
                    </MoneyList>
                    <MoneyList $isActive={Money ==="€"} onClick={() => dispatch(changeMoney("€"), dispatch(showMoneyDropDown()))}>
                    € Euro
                    </MoneyList>
                  </ChooseMoney>
                </DropDownMoney>
                </motion.div>
              )}
              </AnimatePresence>
          </MoneySection> 
    </>
  )
}

