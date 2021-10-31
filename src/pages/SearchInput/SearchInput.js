import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { decodeString } from '../../helpers/decodeString';
import { Wrapper, StyledSpan, StyledInput, StyledList, StyledListItem} from "./SearchInput.styles"

const SearchInput = () => {
   const [inputValue, setInputValue] = useState('')
   const [students, setStudents] = useState([])
   const [openList, setOpenList] = useState(false)

   useEffect(() => {
      if(inputValue === '') return null
      else {
         axios.get(`/student/${decodeString(inputValue.replace(/\s/g, ''))}`)
            .then(({data}) => setStudents(data.students))
      }
   }, [inputValue])

   const handleInputChange = (e) => {
      setInputValue(e.target.value)
      setOpenList(true)
   }

   const handleFindStudent = (student) => {
      setInputValue(student)
      setOpenList(false)
   }

   return (
      <Wrapper>
         <label>
            <StyledSpan> Logged as: </StyledSpan> 
            <br /> 
            <StyledSpan>Teacher</StyledSpan>
         </label>
         
         
         <div style={{ position: 'relative' }}>
            <StyledInput placeholder='find student' value={inputValue} onChange={handleInputChange} />
            {inputValue !== '' && openList ? (
               <>
                  {students.length !== 0 ? (
                     <StyledList>
                        {students.map((student) => (
                           <StyledListItem 
                              key={student.id} 
                              onClick={() => handleFindStudent(student.name)}
                           >
                              <button>{students.length !== 0 ? `${student.name}` : 'No matching students'}</button>

                           </StyledListItem>
                        ))}
                     </StyledList>
                  ) : <StyledList><StyledListItem>No matching students!</StyledListItem></StyledList>}
               </>
            ) : null}
         </div>

      </Wrapper>
   );
};

export default SearchInput;