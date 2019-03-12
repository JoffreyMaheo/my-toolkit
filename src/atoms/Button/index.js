import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import colors from '../../themes/colors';

const ButtonStyled = styled.div`
  background: ${props => props.color};

  ${props => props.size === 'xs' && css`
    padding: 10px;
  `}
  ${props => props.size === 'md' && css`
    padding: 15px;
  `}
  ${props => props.size === 'xl' && css`
    padding: 20px;
  `}
`;

const Button = ({
  size = 'xs',
  type = 'primary',
  color = colors.mainMeetic,
  children,
  ...otherProps
}) =>
<ButtonStyled size={size} color={color} type={type} {...otherProps}>{children}</ButtonStyled>;

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
}

export default Button;
