import tw from "tailwind-styled-components";

export const Section = tw.section`
bg-primary
text-white
`;

export const Container = tw.div`
container
flex-col
items-center
flex
py-2.5
mx-auto

md:flex-row
md:justify-between
`;

export const RightSide = tw.div`
flex
items-center
gap-x-3
`;

export const LanguageSection = tw.div`
flex
items-center
`;

export const LanguageButton = tw.button`
flex
items-center
`;

export const DropDownLanguage = tw.div`
bg-white
border-solid
border
border-zinc-200
absolute
text-black
w-[100px]
rounded
`;

export const LanguageList = tw.li`
${(p) => (p.$isActive && "bg-gray-200 font-semibold")}
p-1
text-neutral-600
hover:bg-gray-100
`;

export const ChooseLanguage = tw.ul`
flex
flex-col
w-full  
text-center
cursor-pointer
`;


export const MoneySection = LanguageSection;
export const MoneyButton = LanguageButton;
export const DropDownMoney = DropDownLanguage;
export const MoneyList = LanguageList;
export const ChooseMoney = ChooseLanguage;