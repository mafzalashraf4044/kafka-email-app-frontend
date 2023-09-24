import { useState } from "react";

export function useModal(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    onClose: toggleModal,
    toggleModal,
  };
}
