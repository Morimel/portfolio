import React, { useContext } from "react";
// import { useLocation } from 'react-router-dom';
import AppContexts from "../../Сontexts/AppContexts";

import "./Footer.scss";

function Footer() {
  const { loading } = useContext(AppContexts);

  if (loading) return null;

  return <p className="footer">Мэлсов Иса &copy; 2024</p>;
}

export default Footer;
