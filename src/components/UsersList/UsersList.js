import React from 'react';
import { users } from '../../data/users';
import UsersListItem from '../UsersListItem/UsersListItem';

const UsersList = () => {
   return (
     <div>
       <ul>
         {users.map((user) => (
            <UsersListItem user={user} key={user.name}/>
         ))}
       </ul>
     </div>
   );
};

export default UsersList;