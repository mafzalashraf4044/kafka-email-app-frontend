import { useState } from "react";

export interface ModalStateInterface {
  isOpen: boolean;
  onClose: () => void;
  toggleModal: () => void;
}

export default function useModal(initialState = false): ModalStateInterface {
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
