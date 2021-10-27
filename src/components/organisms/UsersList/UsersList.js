import React from 'react';
import { users } from '../../../data/users';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

const UsersList = () => {
   return (
     <Wrapper>
       <StyledList>
         {users.map((user, i) => (
            <UsersListItem index={i} user={user} key={user.name}/>
         ))}
       </StyledList>
     </Wrapper>
   );
};

export default UsersList;