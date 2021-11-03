import React from 'react';
import { StyledAverageIcon } from './AverageIcon.styles';
import { theme } from '../../assets/styles/theme';

const AverageIcon = ({ average, isBig }) => {

   const iconColorHandler = () => {
      if( average < 3 ) return theme.colors.error
      if( average >= 3 && average < 4) return theme.colors.warning
      if( average >= 4 ) return theme.colors.success
   }

   return (
      <StyledAverageIcon isBig={isBig} average={iconColorHandler}>{average}</StyledAverageIcon>
   );
};

export default AverageIcon;