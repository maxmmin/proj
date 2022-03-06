import React, { useState } from "react";

const Modal = React.createContext()

export const useModal = function () {
    return React.useContext(Modal)
}

export const ModalProvider = function ({children, mode}) {

    const [modalState, setModalState] = useState({isShown: false, mode: 0})
    console.log(modalState)

    return (
        <Modal.Provider value={{modalState: modalState, setModalState: setModalState}} >
            {children}
        </Modal.Provider>
    )
}
