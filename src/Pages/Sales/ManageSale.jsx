import React, { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent"
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable"
import ActionsButtons from "../../Components/Web Components/ActionButtons/ActionsButtons"
import { Column, Button } from "devextreme-react/data-grid"
import { Popup } from "devextreme-react/popup"
import { Link, useNavigate } from "react-router-dom"
import ScrollView from "devextreme-react/scroll-view"
import ReportTable from "../Closing/ReportTable"
import CodeGenerator from "../../Components/Web Components/CodeGenerator/CodeGenerator"
import { TitleColor } from "../../Styles/Colors"
import logo from "../../Images/logo.png"
import { useReactToPrint } from "react-to-print"
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent"
import SearchBar from "../Closing/SearchBar"

function ManageSale() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const defaultValues = useRef({
    start_date: "",
    end_date: "",
  })

  const [values, setValues] = useState(defaultValues.current)

  function handleSubmit() {
    if (!validDate) {
      alert(t("Start date cant be bigger than end date"))
    }
  }

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [validDate, setValidDate] = useState(true)

  const dateData = [
    {
      label: "Start Date :",
      value: "start_date",
      selected: startDate,
      onChange: setStartDate,
    },
    {
      label: "End Date :",
      value: "end_date",
      selected: endDate,
      onChange: setEndDate,
    },
  ]

  const [clickedQr, setClickedQr] = useState(false)
  const [clickedBar, setClickedBar] = useState(false)
  const [clickedEdit, setClickedEdit] = useState(false)
  const [posSale, SetPosSale] = useState(false)
  const [currentRowId, setCurrentRowId] = useState(0)
  const [currentRowData, setCurrentRowData] = useState("")

  const columns = useRef([
    {
      field: "sl",
      caption: t("SL."),
    },
    {
      field: "invoice_no",
      caption: t("Invoice No."),
    },
    {
      field: "sale_by",
      caption: t("Sale By"),
    },
    {
      field: "Customer Name",
      caption: t("Customer Name"),
    },
    {
      field: "date",
      caption: t("Date"),
      dataType: "date",
    },
    {
      field: "total_amount",
      caption: t("Total Amount"),
      format: "currency",
    },
  ])

  const reportColumns = [
    {
      field: "sl",
      caption: t("SL."),
    },
    {
      field: "product_name",
      caption: t("Product Name"),
    },
    {
      field: "qnty",
      caption: t("Qnty"),
    },
    {
      field: "rate",
      caption: t("Rate"),
    },
    {
      field: "amount",
      caption: t("Amount"),
      format: "currency",
    },
    {
      field: "Total_Price_After_Discount",
      caption: t("Total Price After Discount"),
      format: "currency",
    },
    {
      field: "grand_total",
      caption: t("Grand Total"),
      format: "currency",
    },
    {
      field: "paid_amount",
      caption: t("Paid Amount"),
      format: "currency",
    },
  ]

  const data = useRef([
    {
      sl: 1,
      invoice_no: 1000,
      sale_by: "Admin User",
      date: "02/2/2022	",
      total_amount: 10000,
    },
    {
      sl: 2,
      invoice_no: 1000,
      sale_by: "Admin User",
      date: "02/2/2022	",
      total_amount: 20000,
    },
    {
      sl: 3,
      invoice_no: 1000,
      sale_by: "Admin User",
      date: "02/2/2022	",
      total_amount: 30000,
    },
    {
      sl: 4,
      invoice_no: 1000,
      sale_by: "Admin User",
      date: "02/2/2022	",
      total_amount: 10000,
    },
    {
      sl: 5,
      invoice_no: 1000,
      sale_by: "Admin User",
      date: "02/2/2022	",
      total_amount: 10000,
    },
    {
      sl: 6,
      invoice_no: 1000,
      sale_by: "Admin User",
      date: "02/2/2022	",
      total_amount: 10000,
    },
  ])

  const summary = useRef([
    {
      column: "total_amount",
      summaryType: "sum",
      valueFormat: "currency",
    },
  ])

  const reportSummary = [
    {
      column: "amount",
      summaryType: "sum",
      valueFormat: "currency",
    },
  ]

  const buttons = [
    {
      title: "Add Product",
      path: "/add-product",
      iconClass: "ti-plus",
      class: "btn btn-info m-b-5 m-r-2",
    },
    {
      title: "Add Product (CSV)",
      path: "/add-product-csv",
      iconClass: "ti-align-justify",
      class: "btn btn-primary m-b-5 m-r-2",
    },
  ]

  const masterButtons = [
    {
      hint: "Sale",
      icon: "copy",
      visible: true,
      disabled: false,
      onClick: (e) => {
        setClickedQr(true)
        setCurrentRowId(e.row.data.sl)
      },
    },
    {
      hint: "BarCode",
      icon: "checklist",
      visible: true,
      disabled: false,
      onClick: () => {
        setClickedBar(true)
      },
    },
    {
      hint: "POS Sale",
      icon: "add",
      visible: true,
      disabled: false,
      onClick: () => {
        SetPosSale(true)
      },
    },
    {
      hint: "Update",
      icon: "edit",
      visible: true,
      disabled: false,
      onClick: (e) => {
        setClickedEdit(true)
        setCurrentRowData(e.row.data)
      },
      // onClick:(e) => {navigate(`/update-product/${e.row.data.sl}`)}
    },
    {
      name: "delete",
    },
  ]

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
  )

  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  const saleDetails = (
    <ScrollView style={{ padding: 15 }} width="100%" height="100%">
      <div>
        <div className="d-flex justify-content-end mb-2">
          <ButtonComponent
            title={"Print"}
            style={{ width: "100px" }}
            onClick={handlePrint}
          />
        </div>
        <div ref={componentRef}>
          <ReportTable
            hideHeader
            caption={caption}
            columns={reportColumns}
            // data={reportData}
            summary={reportSummary}
          />
        </div>
      </div>
    </ScrollView>
  )

  const popUp = [
    {
      title: "Sale Details",
      height: "85vh",
      visible: clickedQr,
      hideOnOutsideClick: true,
      onHiding: () => setClickedQr(false),
      children: saleDetails,
    },
    {
      title: "Pad Print",
      height: "85vh",
      visible: clickedBar,
      hideOnOutsideClick: true,
      onHiding: () => setClickedBar(false),
      children: <p>Pad Print</p>,
    },
    {
      title: "POS Sale",
      height: "85vh",
      visible: posSale,
      hideOnOutsideClick: true,
      onHiding: () => SetPosSale(false),
      children: <p>POS Sale</p>,
    },
    {
      title: "Update",
      height: "85vh",
      visible: clickedEdit,
      hideOnOutsideClick: true,
      onHiding: () => setClickedEdit(false),
      children: (
        <ScrollView width="100%" height="100%">
          <p>sasassa</p>
        </ScrollView>
      ),
    },
  ]

  useEffect(() => {
    console.log(values)
  }, [values, startDate, endDate])

  return (
    <div>
      <SearchBar
        hideHeader
        hideCard={false}
        handleSubmit={handleSubmit}
        dateData={dateData}
        startDate={startDate}
        endDate={endDate}
        values={values}
        setValidDate={setValidDate}
        labelWidth="120px"
        width="60%"
      />
      <FormComponent title={"Manage Sale"}>
        <MasterTable
          allowDelete
          allowPaging
          allowExcel
          allowPrint
          columnChooser={false}
          dataSource={data.current}
          colAttributes={columns.current}
          summaryItems={summary.current}
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

      <ActionsButtons style={{ float: "right" }} buttons={buttons} />
    </div>
  )
}

export default ManageSale
