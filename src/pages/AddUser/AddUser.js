import React, { useContext, useState } from 'react';
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
};

const AddUser = ({ setUsersData }) => {
   const [formValue, setFormValue] = useState(initialFormState);

   const { usersData } = useContext(UsersContext)
   const history = useHistory()

   const handleInputChange = (e) => {
      setFormValue({
         ...formValue,
         [e.currentTarget.name]: e.currentTarget.value,
      });
      console.log(formValue);
   };

   const handleAddUser = (e) => {
      e.preventDefault();

      const newUser = {
         name: formValue.name,
         attendance: formValue.attendance,
         average: formValue.average,
      };

      setUsersData([newUser, ...usersData]);
      setFormValue(initialFormState);
      history.push("/")
   };

   return (
      <>
         <Wrapper as="form" onSubmit={handleAddUser}>
            <StyledTitle>Add new student</StyledTitle>
            <FormField
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
            <StyledAddButton type="submit">Add</StyledAddButton>
         </Wrapper>
      </>
   );
};

export default AddUser;