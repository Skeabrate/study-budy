import React, { useContext } from 'react';
import UsersListItem from './UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { StyledTitle } from '../../components/Label/Label.styles';
import { Wrapper } from '../../components/Wrapper/Wrapper.styles';
import PropTypes from 'prop-types'
import UsersContext from '../../context/UsersContext';

const UsersList = ({ setUsersData }) => {
  const { usersData } = useContext(UsersContext)
  
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

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    attendance: PropTypes.string,
    average: PropTypes.string,
  })),
  deleteUser: PropTypes.func,
}

export default UsersList;