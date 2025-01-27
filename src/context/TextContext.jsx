import { createContext, useContext, useState } from "react";



const TextContext = createContext();
export const useText = () => useContext(TextContext);

export const TextProvider = ({children}) => {

    const [text, setText] = useState('');
    const [title, setTitle] = useState('');


    return (
        <TextContext.Provider value={{text, setText, title, setTitle}}>
            {children}
        </TextContext.Provider>
    )
}
