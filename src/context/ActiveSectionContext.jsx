// import React, { createContext, useState, useContext } from "react";

// const ActiveSectionContext = createContext(null);

// export const ActiveSection = ({ children }) => {
//   const [activeSection, setActiveSection] = useState(null);

//   const value = {
//     activeSection,
//     setActiveSection
//   }

//   return (
//     <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
//       {children}
//     </ActiveSectionContext.Provider>
//   );
// }


// export const useActiveSection = () => {
//   const context = useContext(ActiveSectionContext)
//   if(!context) {
//     throw new Error('useActiveSection must be used within an ActiveSectionProvider')
//   }
//   return context
// };
