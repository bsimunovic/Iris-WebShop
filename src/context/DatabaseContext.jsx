import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import React, { useState, useEffect, createContext } from "react";
import { db } from "../firebase";

export const ProductContext = createContext();

export const ProductProvider = (props) => {

    const [flower, setAddProducts] = useState("");
    const [products, setProducts] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [tempUuid, setTempUuid] = useState("");

    const handleTodoChange = (e) => {
        setAddProducts(e.target.value);
    };
  
    useEffect(() => {
      onValue(ref(db), (snapshot) => {
        setProducts([]);
        const data = snapshot.val();
        if (data !== null) {
          Object.values(data).map((addProducts) => {
            setProducts((oldArray) => [...oldArray, addProducts]);
          });
        }
      });
    }, []);
 
    const writeToDatabase = () => {
      const uuid = uid();
      set(ref(db, `/${uuid}`), {
        uuid,
        flower,
      });
  
      setAddProducts("");
    };


  const handleUpdate = (flower) => {
    setIsEdit(true);
    setTempUuid(flower.uuid);
    setAddProducts(flower.flower);
  };

  const handleSubmitChange = () => {
    update(ref(db, `/${tempUuid}`), {
        flower,
        uuid: tempUuid,
    });

    setAddProducts("");
    setIsEdit(false);
  };

 
  const handleDelete = (flower) => {
    remove(ref(db, `/${flower.uuid}`));
  };

  return (
    <>
        <ProductContext.Provider value={[products]}>
            {props.children}      
        </ProductContext.Provider> 
    </>
)
  
}
