import { useState } from 'react';
import Modal from './Modal';

const useModal = (initialState = false) => {
   const [isOpen, setIsOpen] = useState(initialState)

   const handleOpenModal = () => setIsOpen(true)
   const handleCloseModal = () => setIsOpen(false)

   return {
      isOpen,
      handleOpenModal,
      handleCloseModal,
   };
};

export default useModal;