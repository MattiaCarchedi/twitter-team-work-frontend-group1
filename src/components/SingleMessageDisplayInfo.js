import React from "react";

import "./SingleMessageDisplayInfo.css";

const SingleMessageDisplayInfo = (props) => {
  const { key, _id, text, id_user, name_user, onNameClickHandler } = props;

  return <div className="single-message-display-info">{text}</div>;
};

export default SingleMessageDisplayInfo;

