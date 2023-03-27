import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="main-container">
          <div
            className="wrapper-content"
            style={{ marginRight: 20, marginBottom: 20 }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
