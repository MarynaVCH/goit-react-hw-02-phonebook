import React from 'react';
import PropTypes from 'prop-types';
// import { Container, Title } from './Layout.styled';

export default function Title({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
