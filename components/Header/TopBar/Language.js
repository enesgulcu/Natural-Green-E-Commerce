import React,{useEffect, useRef} from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import {showLanguageDropDown, changeLanguage, closeLanguageDropDown} from "../../../redux/states/header/topBar/topBar.js";
//tailwind styled component
import {LanguageSection, LanguageButton, DropDownLanguage, LanguageList, ChooseLanguage,} from '../../../styles/Header/topBar';
import { motion, AnimatePresence } from "framer-motion";


export default function Language() {
    const dispatch = useDispatch();
    const languageDropDownCheck = useSelector((state) => state.topBar.languageDropDown);
    const Language = useSelector((state) => state.topBar.language);

    const ref = useRef();

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (!ref.current?.contains(event.target)) {
          dispatch(closeLanguageDropDown());
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
    },[ref]);

  return (
    <>
        <LanguageSection ref={ref}>
            <LanguageButton onClick={() => dispatch(showLanguageDropDown())}>
              <GiWorld size={20} className="mr-1" />
              <h5 className="flex items-center">{Language} <MdKeyboardArrowDown size={20} className={`${languageDropDownCheck && "rotate-180"} ease-in-out duration-300 `}/></h5>
            </LanguageButton>
              <AnimatePresence>
              {languageDropDownCheck && (
                <motion.div 
                //initial:animasyon başlangıç değerleri
                //animate:animasyonun bitiş değerleri
                //exit:animasyonun geri sarma final değerleri
                //transition:animasyonun gerçekleşme süresi
                //Not: "motion.div" ile hareket edecek olan yapıyı sarmalla!
                initial={{ opacity: 0, x:-90 }}
                animate={{ opacity: 1, y: 30 }}
                exit={{ opacity: 0, y:0 }}
                transition={{duration: 0.5 }}>
                <DropDownLanguage>
                  <ChooseLanguage>
                    <LanguageList $isActive={Language ==="English"} onClick={() => dispatch(changeLanguage("English"), dispatch(showLanguageDropDown()))}>                  
                      English
                    </LanguageList>
                    <LanguageList $isActive={Language ==="Turkish"} onClick={() => dispatch(changeLanguage("Turkish"), dispatch(showLanguageDropDown()))}>
                      Turkish
                    </LanguageList>
                    <LanguageList $isActive={Language ==="Spanish"} onClick={() => dispatch(changeLanguage("Spanish"), dispatch(showLanguageDropDown()))}>
                      Spanish
                    </LanguageList>
                  </ChooseLanguage>
                </DropDownLanguage>
                </motion.div>
              )}
              </AnimatePresence>
          </LanguageSection>
    </>
  )
}

