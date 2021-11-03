import React from 'react';
import UsersListItem from './UsersListItem/UsersListItem';
import { StyledList, StyledDashboard, StyledGroupsNav } from './UsersList.styles';
import { StyledTitle } from '../../components/Label/Label.styles';
import { Wrapper } from '../../components/Wrapper/Wrapper.styles';
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react/cjs/react.development';
import axios from 'axios';
import useModal from './Modal/useModal';
import Modal from './Modal/Modal';

const UsersList = () => {
  const [students, setStudents] = useState([])
  const [groups, setGroups] = useState([])
  const { isOpen, handleOpenModal, handleCloseModal } = useModal()
  const [currentStudent, setCurrentStudent] = useState(null)
  
  const { id } = useParams()

  const handleGetStudentId = (val) => {
    handleOpenModal()
    setCurrentStudent(students.find(student => student.id === val))
  }

  const fetchStudents = async (value) => {
    try{
      if(value === 'groups'){
        const res = await axios.get('/groups')
        setGroups(res.data.groups)
        //setGroups(res.data.groups)
      }
      else if(value === 'byId'){
        const res = await axios.get(`/groups/${id}`)
        setStudents(res.data.students)
      }
      
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(() => {
    fetchStudents('groups')
  }, [])

  useEffect(() => {
    fetchStudents('byId')
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
          <Link to={`/group/${group.id}`} key={group.id}>{group.id}</Link>
        ))}
      </StyledGroupsNav>

      <Wrapper>
        <StyledTitle>Students list</StyledTitle>
        <StyledList>
          {students.map((user) => (
              <UsersListItem onClick={() => handleGetStudentId(user.id)} deleteUser={() => deleteUser(user.name)} user={user} key={user.id}/>
          ))}
        </StyledList>

        <Modal isOpen={isOpen} currentStudent={currentStudent} handleCloseModal={handleCloseModal}/>

      </Wrapper>
     </StyledDashboard>
   );
};

export default UsersList;