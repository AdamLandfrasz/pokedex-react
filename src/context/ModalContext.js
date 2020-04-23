import React, { useState, createContext } from "react";

export const ModalContext = createContext();

export function ModalProvider(props) {
  const [modalShow, setModalShow] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const showLoginModal = () => {
    setIsLogin(true);
    setModalShow(true);
  };

  const showRegisterModal = () => {
    setIsLogin(false);
    setModalShow(true);
  };

  const hideModal = () => setModalShow(false);

  return (
    <ModalContext.Provider
      value={{
        modalShow,
        isLogin,
        showLoginModal,
        showRegisterModal,
        hideModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
}
