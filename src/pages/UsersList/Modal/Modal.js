import React, { useEffect, useState } from 'react';
import { StyledAddButton } from '../../../components/AddButton/AddButton.styles';
import { StyledTitle } from '../../../components/Label/Label.styles';
import AverageIcon from '../../../components/AverageIcon/AverageIcon';
import DeleteButton from "../../../components/DeleteButton/DeleteButton"
import { ModalWrapper, StyledTitleWrapper, StyledClassItem, StyledClassWraper } from './Modal.styles';

const demoData = [
   {
      class: 'Modern Economy',
      grade: '3.4',
   },
   {
      class: 'Trade and Logistics',
      grade: '4.1',
   },
   {
      class: 'Business Philosophy',
      grade: '5.0',
   },
]

const Modal = ({ handleCloseModal, isOpen, currentStudent }) => {
   const [selectedStudent, setSelectedStudent] = useState(false) 

   useEffect(() => {
      setSelectedStudent(currentStudent)
   }, [currentStudent]) 

   return(
      <>
         {selectedStudent ? (
            <ModalWrapper isOpen={isOpen} onRequestClose={handleCloseModal} appElement={document.getElementById('root')}>

            <StyledTitleWrapper>
               <AverageIcon isBig average={selectedStudent.average} isBig/>
               <StyledTitle>{selectedStudent.name}</StyledTitle>
               <DeleteButton />
            </StyledTitleWrapper>

            <div>
               <div>
                  <h5 style={{
                     fontSize: '15px', 
                     marginBottom: '10px',
                  }}>Course:</h5>
                  <p style={{
                     fontSize: '18px', 
                     marginTop: '0'
                  }}>{selectedStudent.course}</p>
               </div>

               <h5 style={{
                     fontSize: '15px', 
                     marginBottom: '0',
               }}>Average grades:</h5>
               
               <StyledClassWraper>
                  {selectedStudent.grades.map((item, index) => (
                     <StyledClassItem key={index}>
                        <p>{item.subject}</p>
                        <AverageIcon average={item.average}/>
                     </StyledClassItem>
                  ))}
                  
               </StyledClassWraper>
            </div>

            <div style={{margin: 'auto'}}>
               <StyledAddButton onClick={handleCloseModal}>Close</StyledAddButton>
            </div>
         </ModalWrapper>
         ) : null}
      </>
   );
};

export default Modal;