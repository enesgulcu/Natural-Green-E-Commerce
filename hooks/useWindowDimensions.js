/**
 * // useWindowDimension.ts
 * * This hook returns the viewport/window height and width
 * * * https://dev.to/adrien/creating-a-custom-react-hook-to-get-the-window-s-dimensions-in-next-js-135k
 */
 import { useEffect, useState } from 'react';
 const useWindowDimensions = () => {
     const [windowDimensions, setWindowDimensions] = useState({
         width: undefined,
         height: undefined,
     });
     useEffect(() => {
         function handleResize() {
             setWindowDimensions({
                 width: window.innerWidth,
                 height: window.innerHeight,
             });
         }
         handleResize();
         window.addEventListener('resize', handleResize);
         return () => window.removeEventListener('resize', handleResize);
     }, []); // Empty array ensures that effect is only run on mount
     return windowDimensions;
 };
 export default useWindowDimensions;