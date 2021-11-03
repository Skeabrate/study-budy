import React from "react";
import PropTypes from "prop-types";
import { StyledListItem, StyledName, StyledAttendance, StyledInfoWrapper } from "./UsersListItem.styles";
import DeleteButton from "../../../components/DeleteButton/DeleteButton"
import AverageIcon from "../../../components/AverageIcon/AverageIcon"

const UsersListItem = ({deleteUser, onClick, user: { average, name, attendance = "0" }}) => {
   return (
      <StyledListItem onClick={onClick}>
         <AverageIcon average={average}/>
         <StyledInfoWrapper>
            <div>
               <StyledName>{name}</StyledName>
               <StyledAttendance>attendance: {attendance}</StyledAttendance>
            </div>
            <DeleteButton deleteUser={deleteUser} />
         </StyledInfoWrapper>
      </StyledListItem>
   );
};

export default UsersListItem;
