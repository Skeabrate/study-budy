import React from 'react';
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.icon.svg"
import { StyledDeleteButton } from "./DeleteButton.styles"

const Button = ({ deleteUser }) => {
   return (
      <>
         <StyledDeleteButton onClick={deleteUser}>
            <DeleteIcon />
         </StyledDeleteButton>  
      </>
   );
};

export default Button;