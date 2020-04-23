import React, { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

function Modal(props) {
  const [modalShow, setModalShow] = useContext(ModalContext);

  const hideModal = () => {
    if (modalShow) {
      setModalShow(false);
    }
  };

  return modalShow ? (
    <div id="page-mask" onClick={hideModal}>
      <div id="modal" onClick={(e) => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  ) : null;
}

export default Modal;
