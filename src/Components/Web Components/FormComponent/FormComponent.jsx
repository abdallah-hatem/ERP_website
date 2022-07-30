import React from "react";
import "./FormComponent.css";

import { Card, CardHeader, CardBody } from "shards-react";
import { useTranslation } from "react-i18next";

function FormComponent({
  children,
  title,
  style,
  hideHeader = false,
  content,
  hideCard = false,
}) {
  const { t, i18n } = useTranslation();
  return !hideCard ? (
    <div style={style}>
      <Card small className="mb-4">
        <CardHeader
          style={{
            backgroundColor: "white",
            textAlign: i18n.language === "ar" && "right",
            // justifyContent: i18n.language === "ar" && "right",
            display: hideHeader && "none",
          }}
          className="border-bottom"
        >
          {content ? (
            // put button in the header div
            <div className="d-flex justify-content-between">
              <h6 className="m-0">{t(title)}</h6>
              {content}
            </div>
          ) : (
            <h6 className="m-0">{t(title)}</h6>
          )}
        </CardHeader>
        <CardBody>{children}</CardBody>
      </Card>
    </div>
  ) : (
    children
  );
}

export default FormComponent;
