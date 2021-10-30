import React from 'react';
import UsersListItem from './UsersListItem/UsersListItem';
import { StyledList, StyledDashboard, StyledGroupsNav } from './UsersList.styles';
import { StyledTitle } from '../../components/Label/Label.styles';
import { Wrapper } from '../../components/Wrapper/Wrapper.styles';
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react/cjs/react.development';
import axios from 'axios';

const UsersList = () => {
  const [students, setStudents] = useState([])
  const [groups, setGroups] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get('/groups')
      .then(({data}) => setGroups(data.groups))
  }, [])

  useEffect(() => {
    axios.get(`/students/${id}`)
      .then(({data}) => setStudents(data.students))
      .catch((err) => console.log(err))
  }, [id])

  const deleteUser = (name) => {
    const filtredUsers = students.filter(user => user.name !== name)
    setStudents(filtredUsers)
  }

   return (
     <StyledDashboard>
      <StyledGroupsNav>
        <StyledTitle>Group {id}</StyledTitle>
        {groups.map(group => (
          <Link to={`/group/${group}`} key={group}>{group}</Link>
        ))}
      </StyledGroupsNav>

      <Wrapper>
        <StyledTitle>Students list</StyledTitle>
        <StyledList>
          {students.map((user) => (
              <UsersListItem deleteUser={() => deleteUser(user.name)} user={user} key={user.id}/>
          ))}
        </StyledList>
      </Wrapper>
     </StyledDashboard>
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