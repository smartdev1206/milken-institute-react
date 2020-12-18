import PropTypes from "prop-types";
import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import classnames from "classnames";

const MAX_LENGTH_LIMIT = 100;

function TextEllipsis({ text }) {
  const [showmore, setShowmore] = useState(false);

  const renderViewMoreButton = () => {
    return (
      <button
        className="btn btn-primary d-block mt-3"
        onClick={() => setShowmore(!showmore)}
        aria-controls="text-collapse"
        aria-expanded={showmore}
      >
        {showmore ? "View Less" : "View More"}
      </button>
    );
  };

  return (
    <>
      <p>{text.substring(0, MAX_LENGTH_LIMIT - 3)}</p>
      <Collapse in={showmore}>
        <div id="text-collapse">
          <p>{text.substring(MAX_LENGTH_LIMIT - 3, text.length)}</p>
        </div>
      </Collapse>

      {renderViewMoreButton()}
    </>
  );
}

function ContentCard({ id, image, type, title, text }) {

  return (
    <div className="content-card card d-flex flex-column">
      <div className="card-body">
        <div className="content-image-wrapper">
          <img alt="content" src={image} className="card-image" />
          <span>{type}</span>
        </div>
        <div className="content-text-wrapper">
          <h5>{title}</h5>
          {text && text.length > MAX_LENGTH_LIMIT ? (
            <TextEllipsis text={text} />
          ) : (
            <p>{text}</p>
          )}
        </div>
      </div>
    </div>
  );
}

ContentCard.propTypes = {
  type: PropTypes.string,
  id: PropTypes.any,
  image: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};

export default ContentCard;