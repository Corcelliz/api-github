import React from "react";
import PropTypes from "prop-types";

import { Container, Selector, Cleaner } from "./styles";

function Filter({ languages, currentlanguage, onClick }) {
  const selectors = languages.map(({ name, count, color }) => (
    <Selector 
      key={name.toLowerCase()} 
      color={color}
      className={currentlanguage === name ? 'selected' : ''}
      onClick={() => onClick && onClick(name)}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner onClick={() => onClick && onClick(undefined)}>Limpar</Cleaner>
    </Container>
  );
}

Filter.defaultProps = {
  currentlanguage: null,
  onClick: null,
};

Filter.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentlanguage: PropTypes.string,
  onClick: PropTypes.func,
};

export default Filter;
