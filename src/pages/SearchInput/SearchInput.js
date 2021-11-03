import axios from 'axios';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import { Wrapper, StyledSpan, StyledInput, StyledList, StyledListItem} from "./SearchInput.styles"
import { useCombobox } from "downshift"

const SearchInput = () => {
   const [students, setStudents] = useState([])

   const fetchStudents = async ({inputValue}) => {
      try{
         const res = await axios.post(`/students/search`, {inputValue})
         setStudents(res.data.students)
      } catch (ex) {
         console.log(ex)
      }
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
                           {student.name}
                        </StyledListItem>
                  ))}
               </StyledList>     
         </div>

      </Wrapper>
   );
};

export default SearchInput;