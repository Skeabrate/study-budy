import axios from 'axios';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import { decodeString } from '../../helpers/decodeString';
import { Wrapper, StyledSpan, StyledInput, StyledList, StyledListItem} from "./SearchInput.styles"
import { useCombobox } from "downshift"
import { objectToArray } from '../../helpers/objects';

const SearchInput = () => {
   const [students, setStudents] = useState([])

   const fetchStudents = ({inputValue}) => {
      axios.get(`/student/${decodeString(inputValue.replace(/\s/g, ''))}`)
      .then(({data}) => setStudents(objectToArray(data.students)))
   }

   const {
      isOpen,
      getMenuProps,
      getInputProps,
      getComboboxProps,
      highlightedIndex,
      getItemProps,
   } = useCombobox({
      items: students,
      onInputValueChange: fetchStudents,
   })

   return (
      <Wrapper>
         <label>
            <StyledSpan> Logged as: </StyledSpan> 
            <br /> 
            <StyledSpan>Teacher</StyledSpan>
         </label>
         
         
         <div style={{ position: 'relative' }} {...getComboboxProps()}>
            <StyledInput {...getInputProps()} placeholder='find student'/>
               <StyledList isOpen={isOpen && students.length > 0} {...getMenuProps()}>
                  {isOpen &&
                     students.map((student, index) => (
                        <StyledListItem isHighlighted={highlightedIndex === index} {...getItemProps({student, index})} key={index} >
                           {student}
                        </StyledListItem>
                  ))}
               </StyledList>     
         </div>

      </Wrapper>
   );
};

export default SearchInput;