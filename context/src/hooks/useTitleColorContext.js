import { useContext } from "react";
import { TitleColorContext } from '../context/TitleColorContext';

export const useTitleColorContext = () => {

    const context = useContext(TitleColorContext);

    if (!context) {
        alert('Context TitleColorContext nao esta disponivel');
        return
    }

    return context;
}