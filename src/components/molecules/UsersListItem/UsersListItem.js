import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button";
import { StyledListItem, StyledName, StyledAttendance, StyledInfoWrapper } from "./UsersListItem.styles";
import AverageIcon from "../../atoms/AverageIcon/AverageIcon";



const UsersListItem = ({index, user: { average, name, attendance = "0" } }) => {

   const showIndex = (index) => alert(`this is student nr: ${index + 1}`)

   return (
      <StyledListItem>
         <AverageIcon average={average}/>
         <StyledInfoWrapper>
            <div>
               <StyledName>{name}</StyledName>
               <StyledAttendance>attendance: {attendance}</StyledAttendance>
            </div>
            <Button showIndex={() => showIndex(index)} />
         </StyledInfoWrapper>
      </StyledListItem>
   );
};

UsersListItem.propTypes = {
   user: PropTypes.shape({
      average: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      attendance: PropTypes.string,
   }),
};

export default UsersListItem;
