import { createContext, useEffect, useState } from 'react';
import { useGetLocation } from '_utils/hooks/useGetLocation';
import { AuthService } from '_utils/services/authService';


export const Contexte = createContext();

export const ContexteProvider = (props) => {
   const [isSigned, setIsSigned] = useState(false);
   const { position, errorMsgLocation } = useGetLocation();

   return (
      <Contexte.Provider
         value={{ isSigned, setIsSigned, position, errorMsgLocation}}
      >
         {props.children}
      </Contexte.Provider>
   );
};
