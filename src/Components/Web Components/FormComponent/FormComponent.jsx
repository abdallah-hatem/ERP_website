import React from "react";
import "./FormComponent.css";

import { Card, CardHeader, CardBody } from "shards-react";
import { useTranslation } from "react-i18next";

function FormComponent({ children, title, style, hideHeader = false }) {
  const { t, i18n } = useTranslation();
  return (
    <div style={style}>
      <Card small className="mb-4">
        <CardHeader
          style={{
            backgroundColor: "white",
            textAlign: i18n.language === "ar" && "right",
            display: hideHeader && "none",
          }}
          className="border-bottom"
        >
          <h6 className="m-0">{t(title)}</h6>
        </CardHeader>
        <CardBody>{children}</CardBody>
      </Card>
    </div>
  );
}

export default FormComponent;