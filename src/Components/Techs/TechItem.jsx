import React from "react";
import PropTypes from "prop-types";

const TechItem = ({ tech: { id, firstName, lastName } }) => {
  return (
    <li className="collection-item" key={id}>
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;