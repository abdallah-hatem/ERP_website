import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Column, Button } from "devextreme-react/data-grid";
import { Popup } from "devextreme-react/popup";
import ScrollView from "devextreme-react/scroll-view";

import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";
import ServiceDetails from "./ServiceDetails";

function ManageServiceInvoice() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [clicked, setClicked] = useState(false);

  const columns = [
    {
      field: "sl",
      caption: t("SL."),
    },
    {
      field: "product_name",
      caption: t("Product Name"),
    },
    {
      field: "product_model",
      caption: t("Product Model"),
    },
    {
      field: "supplier_name",
      caption: t("Supplier Name"),
    },
    {
      field: "price",
      caption: t("Price"),
      format: "currency",
    },
    {
      field: "supplier_price",
      caption: t("Supplier Price"),
      format: "currency",
    },
  ];

  const data = [
    {
      sl: 1,
      product_name: "PS5",
      product_model: "Sm",
      supplier_name: "Hudson",
      price: 5,
      supplier_price: 10,
      images:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      sl: 2,
      product_name: "PS4",
      product_model: "Sm",
      supplier_name: "Justin",
      price: 5,
      supplier_price: 20,
      images:
        "https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      sl: 3,
      product_name: "PS3",
      product_model: "Sm",
      supplier_name: "Hudson",
      price: 5,
      supplier_price: 30,
      images:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      sl: 4,
      product_name: "PS5",
      product_model: "Sm",
      supplier_name: "Hudson",
      price: 5,
      supplier_price: 10,
      images:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      sl: 5,
      product_name: "PS5",
      product_model: "Sm",
      supplier_name: "Hudson",
      price: 5,
      supplier_price: 10,
      images:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      sl: 6,
      product_name: "PS5",
      product_model: "Sm",
      supplier_name: "Hudson",
      price: 5,
      supplier_price: 10,
      images:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const masterButtons = [
    {
      hint: "Details",
      icon: "copy",
      visible: true,
      disabled: false,
      onClick: () => {
        setClicked(true);
      },
    },
    {
      hint: "BarCode",
      icon: "checklist",
      visible: true,
      disabled: false,
      onClick: () => {},
    },
    {
      hint: "Update",
      icon: "edit",
      visible: true,
      disabled: false,
      onClick: (e) => {},
      // onClick:(e) => {navigate(`/update-product/${e.row.data.sl}`)}
    },
    {
      name: "delete",
    },
  ];

  const popUp = [
    {
      title: "Service Details",
      height: "90vh",
      visible: clicked,
      hideOnOutsideClick: true,
      onHiding: () => setClicked(false),
      children: (
        <ScrollView width="100%" height="100%">
          <ServiceDetails />
        </ScrollView>
      ),
    },
  ];

  return (
    <FormComponent title={"Manage Service Invoice"}>
      <MasterTable
        allowDelete
        allowPaging
        allowExcel
        allowPrint
        columnChooser={false}
        dataSource={data}
        colAttributes={columns}
        ColoredRows
        // onRowDoubleClick={(e) => navigate(`/product-details/${e.data.sl}`)}
      >
        <Column type="buttons" width={120}>
          {masterButtons.map((el) => (
            <Button
              hint={t(el.hint)}
              icon={el.icon}
              visible={el.visible}
              disabled={el.disabled}
              onClick={el.onClick}
              name={el.name}
            />
          ))}
        </Column>

        {popUp.map(
          (el) =>
            el.visible && (
              <Popup
                title={t(el.title)}
                height={el.height}
                visible={el.visible}
                hideOnOutsideClick={el.hideOnOutsideClick}
                onHiding={el.onHiding}
              >
                {el.children}
              </Popup>
            )
        )}
      </MasterTable>
    </FormComponent>
  );
}

export default ManageServiceInvoice;
