import React, { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";

function Modal(props) {
  const modalContext = useContext(ModalContext);

  const hideModal = () => {
    if (modalContext.modalShow) {
      modalContext.hideModal();
    }
  };

  return modalContext.modalShow ? (
    <div id="page-mask" onClick={hideModal}>
      <div id="modal" onClick={(e) => e.stopPropagation()}>
        {modalContext.isLogin ? (
          <LoginForm></LoginForm>
        ) : (
          <RegisterForm></RegisterForm>
        )}
      </div>
    </div>
  ) : null;
}

export default Modal;
