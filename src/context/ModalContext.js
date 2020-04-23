import React, { useState, createContext } from "react";

export const ModalContext = createContext();

export function ModalProvider(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <ModalContext.Provider value={[modalShow, setModalShow]}>
      {props.children}
    </ModalContext.Provider>
  );
}
