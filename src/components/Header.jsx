import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import "../css/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); 

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div>
      <div className="header-all">
        <h1>{t("Hi")}</h1> 
        <p>{t("about-me")}</p> 
        <p>{t("about-job")}</p>
        <button onClick={handleContactClick}>{t("contactMe")}</button>
      </div>
    </div>
  );
};

export default Header;
