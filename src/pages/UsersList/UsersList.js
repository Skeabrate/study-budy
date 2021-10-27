import React from 'react';
import UsersListItem from './UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { StyledTitle } from '../../components/Label/Label.styles';
import { Wrapper } from '../../components/Wrapper/Wrapper.styles';

const UsersList = ({ usersData, setUsersData }) => {
  
  const deleteUser = (name) => {
    const filtredUsers = usersData.filter(user => user.name !== name)
    setUsersData(filtredUsers)
  }

   return (
     <>
      <Wrapper>
        <StyledTitle>Students list</StyledTitle>
        <StyledList>
          {usersData.map((user) => (
              <UsersListItem deleteUser={() => deleteUser(user.name)} user={user} key={user.name}/>
          ))}
        </StyledList>
      </Wrapper>
     </>
   );
};

export default UsersList;