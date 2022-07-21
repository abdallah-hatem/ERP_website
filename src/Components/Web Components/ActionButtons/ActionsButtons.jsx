import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ActionsButtons({ buttons = [] }) {
  const { t } = useTranslation();

  return (
    <div style={{ float: "right" }} class="padding-lefttitle">
      {buttons.map((el) => (
        <Link to={el.path} className={el.class} style={{ margin: 5 }}>
          <i class={el.iconClass}> </i>
          {t(el.title)}
        </Link>
      ))}
    </div>
  );
}

export default ActionsButtons;
