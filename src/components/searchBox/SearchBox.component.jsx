import React from "react";

import "../searchBox/searchBox.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
//bringing in placeholder
//bringing in onChange functionality from parent (it used or accesed state so we only reference it in searchBox component)
