import React, { useContext, useEffect, useReducer, useRef } from 'react';
import FormField from '../../components/FormField/FormField';
import { StyledTitle } from '../../components/Label/Label.styles';
import { StyledAddButton } from "../../components/AddButton/AddButton.styles"
import { Wrapper } from '../../components/Wrapper/Wrapper.styles';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import UsersContext from '../../context/UsersContext';

const initialFormState = {
   name: "",
   attendance: "",
   average: "",
   consent: false,
   showError: false,
};

const reducer = (state, action) => {
   switch (action.type){
      case 'CHANGE_INPUT':
         return {
            ...state,
            [action.field]: action.value, 
         }
      
      case "CLEAR_VALUES":
         return initialFormState

      case "CHANGE_CONSENT":
         return {
            ...state,
            [action.field]: !state.consent
         }

      case "SHOW_ERROR":
         return {
            ...state,
            showError: !state.showError,
         }

      default:
         return state
   }
}

const AddUser = ({ setUsersData }) => {
   const [formValue, dispatch] = useReducer(reducer, initialFormState);

   const { usersData } = useContext(UsersContext)
   const history = useHistory()
   const firstFormField = useRef(null)

   useEffect(() => {
      firstFormField.current.focus()
   }, [])

   const handleInputChange = (e) => {
      dispatch({
         type: 'CHANGE_INPUT',
         field: e.target.name,
         value: e.target.value,
      })
      console.log(formValue)
   };

   const handleAddUser = (e) => {
      e.preventDefault();

      if(formValue.consent){
         setUsersData([formValue, ...usersData]);
         dispatch({
            type: "CLEAR_VALUES"
         })
         history.push('/')
      } else {
         dispatch({
            type: "SHOW_ERROR",
         })
      }
   };

   const handleConsent = (e) => {
      dispatch({
         type: "CHANGE_CONSENT",
         field: e.target.name,
      })
      dispatch({
         type: "SHOW_ERROR",
      })
   }

   return (
      <>
         <Wrapper as="form" onSubmit={handleAddUser}>
            <StyledTitle>Add new student</StyledTitle>
            <FormField
               ref={firstFormField}
               label="Name"
               id="name"
               name="name"
               value={formValue.name}
               onChange={handleInputChange}
            />
            <FormField
               label="Attendance"
               id="attendance"
               name="attendance"
               value={formValue.attendance}
               onChange={handleInputChange}
            />
            <FormField
               label="Average"
               id="average"
               name="average"
               value={formValue.average}
               onChange={handleInputChange}
            />
            <FormField 
               label="Consent"
               id="consent"
               name="consent"
               type="checkbox"
               value={formValue.consent}
               onChange={handleConsent}
            />
            <StyledAddButton type="submit">Add</StyledAddButton>
            {formValue.showError ? <p>You need to give consent!</p> : null}
         </Wrapper>
      </>
   );
};

export default AddUser;