import React from "react";
import { useTranslation } from "react-i18next";
import ActionsButtons from "../../Components/Web Components/ActionButtons/ActionsButtons";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";

function ManageService() {
  const { t } = useTranslation();

  const columns = [
    {
      field: "sl",
      caption: t("SL."),
      allowEditing: false,
    },
    {
      field: "service_name",
      caption: t("Service Name"),
    },
    {
      field: "charge",
      caption: t("Charge"),
      format: "currency",
    },
    {
      field: "description",
      caption: t("Description"),
    },
    {
      field: "vat",
      caption: t("VAT"),
      //   format: "percent",
      cellRender: (data) => <span>{data.value} %</span>,
    },
    {
      field: "igt",
      caption: t("IGT"),
      //   format: "percent",
      cellRender: (data) => <span>{data.value} %</span>,
    },
  ];

  const data = [
    {
      sl: 1,
      service_name: "home delivery",
      charge: 1500,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et.",
      vat: 2,
      igt: 2,
    },
    {
      sl: 2,
      service_name: "home delivery",
      charge: 1500,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et.",
      vat: 2,
      igt: 2,
    },
    {
      sl: 3,
      service_name: "home delivery",
      charge: 1500,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et.",
      vat: 2,
      igt: 2,
    },
    {
      sl: 4,
      service_name: "home delivery",
      charge: 1500,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et.",
      vat: 2,
      igt: 2,
    },
    {
      sl: 5,
      service_name: "home delivery",
      charge: 1500,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et.",
      vat: 2,
      igt: 2,
    },
    {
      sl: 6,
      service_name: "home delivery",
      charge: 1500,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et.",
      vat: 2,
      igt: 2,
    },
  ];

  const buttons = [
    {
      title: "Add Service",
      path: "add-service",
      iconClass: "ti-plus",
      class: "btn btn-info m-b-5 m-r-2",
    },
  ];

  return (
    <>
      <FormComponent title={"Manage Service"}>
        <MasterTable
          allowPrint
          allowExcel
          allowDelete
          allowUpdate
          allowPaging
          columnChooser={false}
          dataSource={data}
          colAttributes={columns}
          ColoredRows
        />
      </FormComponent>

      <ActionsButtons style={{ float: "right" }} buttons={buttons} />
    </>
  );
}

export default ManageService;
