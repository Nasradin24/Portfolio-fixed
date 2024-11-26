import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../css/Footer.css";
import imageAZ from "../assets/images/az-flag.png";
import imageEN from "../assets/images/en-flag.png";
import imageGE from "../assets/images/geo-flag.png";
import imagePLN from "../assets/images/pln-flag.png";

function Footer() {
  const { i18n, t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLang =
      currentLang === "az"
        ? "en"
        : currentLang === "en"
        ? "ge"
        : currentLang === "ge"
        ? "pln"
        : "az";
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  const getFlag = () => {
    if (currentLang === "az") return imageEN;
    if (currentLang === "en") return imageGE;
    if (currentLang === "ge") return imagePLN;
    return imageAZ;
  };

  return (
    <footer className="footer-last">
      <p>© 2024 Guseinovi Nasradin.</p>
      <p>
        {t("Switch language to")}{" "}
        <img
          src={getFlag()}
          width={20}
          alt={`${currentLang} Flag`}
          onClick={toggleLanguage}
          style={{ cursor: "pointer" }}
        />
      </p>
    </footer>
  );
}

export default Footer;
