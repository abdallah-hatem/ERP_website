import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Column, Button } from "devextreme-react/data-grid";
import { Popup } from "devextreme-react/popup";
import ScrollView from "devextreme-react/scroll-view";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import { Link } from "react-router-dom";
import QuotationDetails from "./QuotationDetails";
import { TitleColor } from "../../Styles/Colors";
import logo from "../../Images/logo.png";
import CodeGenerator from "../../Components/Web Components/CodeGenerator/CodeGenerator";

function ManageQuotation() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [clicked, setClicked] = useState(false);

  const columns = [
    {
      field: "sl",
      caption: t("SL."),
    },
    {
      field: "customer_name",
      caption: t("Customer Name"),
    },
    {
      field: "quotation_no",
      caption: t("Quotation No"),
      //   cellRender: (data) => (
      //     <Link to={`/quotation-details/${data.key.sl}`}>
      //       <span style={{ color: "green" }}>{data.value}</span>
      //     </Link>
      //   ),
    },
    {
      field: "quotation_date",
      caption: t("Quotation Date"),
    },
    {
      field: "expiry_date",
      caption: t("Expiry Date"),
    },
    {
      field: "item_total",
      caption: t("Item Total"),
      format: "currency",
    },
    {
      field: "service_total",
      caption: t("Service Total"),
      format: "currency",
    },
    {
      field: "status",
      caption: t("Status"),
    },
  ];

  const data = [
    {
      sl: 1,
      customer_name: "PS5",
      quotation_no: "Sm",
      quotation_date: "Hudson",
      price: 5,
      supplier_price: 10,
    },
    {
      sl: 2,
      customer_name: "PS4",
      quotation_no: "Sm",
      quotation_date: "Justin",
      price: 5,
      supplier_price: 20,
    },
    {
      sl: 3,
      customer_name: "PS3",
      quotation_no: "Sm",
      quotation_date: "Hudson",
      price: 5,
      supplier_price: 30,
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

  const caption = (
    <div className="mb-5 row align-items-center">
      <div class="mb-3 col-lg-4" style={{ color: TitleColor }}>
        <img src={logo} alt="" />
        <h3> Demo Company </h3>
        <h4>Company Demo Address </h4>
        <h4>demo@mail.com </h4>
        <h4> 123456 </h4>
        <strong>Closing Report</strong>
      </div>
      <div className="col-lg-4">
        <CodeGenerator type="qrCode" value="Google.com" />
      </div>
      <span className="col-lg-4 text-center">Date: 27-Jul-2022</span>
    </div>
  );

  const popUp = [
    {
      title: "Details",
      height: "90vh",
      visible: clicked,
      hideOnOutsideClick: true,
      onHiding: () => setClicked(false),
      children: (
        <ScrollView width="100%" height="100%">
          {/* <QuotationDetails caption={caption} /> */}
        </ScrollView>
      ),
    },
  ];

  return (
    <FormComponent title={"Manage Quotation"}>
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

export default ManageQuotation;
