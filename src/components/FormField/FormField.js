import React from 'react';
import PropTypes from 'prop-types'
import { StyledLabel } from "../../components/Label/Label.styles"
import { StyledInput } from "../../components/Input/Input.styles"
import styled from 'styled-components';

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   
   ${StyledLabel} {
      margin: 10px 0;
   }
`

const FormField = React.forwardRef(({ onChange, value, label, name, id, type = "text", ...props }, firstFormField) => {
   return (
      <Wrapper>
         <StyledLabel htmlFor={id}>
            {label}
         </StyledLabel>
         <StyledInput ref={firstFormField} name={name} id={id} type={type} value={value} onChange={onChange}/>
      </Wrapper>
   );
});

FormField.propTypes = {
   label: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   type: PropTypes.string,
}

export default FormField;