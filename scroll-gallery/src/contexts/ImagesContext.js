import React, {createContext, useContext ,useState } from 'react';

export const ImagesContext = createContext();

export default function ImagesContextProvider({children}) {
  let [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('en');
    return (
        <ImagesContext.Provider value={{ images, query, setQuery ,setImages, language, setLanguage}}>
            {children}
        </ImagesContext.Provider>
    )
}
export const useGlobalContext = () => {
  return useContext(ImagesContext);
}