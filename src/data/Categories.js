import React, {createContext,useEffect,useState} from 'react'
import { getDataCategories } from '../service/api'

export const CategoriesContext = createContext();
export default function Categories(props) {
    const [categories, setCaregories] = useState([]);
    useEffect(() => {
      getDataCategories().then ((res)=> {
        setCaregories(res.data);
      })
    }, []);
  
    const saveLocal = (data) => {
      localStorage.setItem("categories", JSON.stringify(data));
    };
  
  return (
  
    <CategoriesContext.Provider value={[categories, setCaregories, saveLocal]}>
        {props.children}
    </CategoriesContext.Provider>
  )
}
