import React, { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent"
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable"
import { Popup } from "devextreme-react/popup"
import { useState } from "react"
import { Column, Button } from "devextreme-react/data-grid"
import ScrollView from "devextreme-react/scroll-view"
import ReportTable from "../Closing/ReportTable"
import logo from "../../Images/logo.png"
import { TitleColor } from "../../Styles/Colors"
import CodeGenerator from "../../Components/Web Components/CodeGenerator/CodeGenerator"
import { useReactToPrint } from "react-to-print"
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent"
import SearchBar from "../Closing/SearchBar"

function ManagePurchase() {
  const { t } = useTranslation()

  const defaultValues = useRef({
    start_date: "",
    end_date: "",
  })

  const [values, setValues] = useState(defaultValues.current)

  function handleSubmit(e) {
    // e.preventDefault();
    for (const [key, value] of Object.entries(values)) {
      if (!value) {
        alert(t("Fill the inputs"))
      }
    }

    if (!validDate) {
      alert(t("Start date cant be bigger than end date"))
    }
  }
  const [clicked, setClicked] = useState(false)

  const columns = [
    {
      field: "sl",
      caption: t("SL."),
    },
    {
      field: "invoice_number",
      caption: t("Invoice No."),
    },
    {
      field: "purchase_id",
      caption: t("Purchase ID"),
    },
    {
      field: "supplier_name",
      caption: t("Supplier Name"),
    },
    {
      field: "purchase_date",
      caption: t("Purchase Date"),
      dataType: "date",
    },
    {
      field: "total_amount",
      caption: t("Total Amount"),
      format: "currency",
    },
  ]

  const data = [
    {
      sl: 1,
      invoice_number: 123,
      purchase_id: 20220202121317,
      supplier_name: "Hudson",
      total_amount: 5,
      supplier_price: 10,
      purchase_date: "2022-02-02",
    },
    {
      sl: 2,
      invoice_number: 123,
      purchase_id: 20220202121317,
      supplier_name: "Hudson",
      total_amount: 5,
      supplier_price: 10,
      purchase_date: "2022-02-02",
    },
    {
      sl: 3,
      invoice_number: 123,
      purchase_id: 20220202121317,
      supplier_name: "Hudson",
      total_amount: 5,
      supplier_price: 10,
      purchase_date: "2022-02-02",
    },
    {
      sl: 4,
      invoice_number: 123,
      purchase_id: 20220202121317,
      supplier_name: "Hudson",
      total_amount: 5,
      supplier_price: 10,
      purchase_date: "2022-02-02",
    },
    {
      sl: 5,
      invoice_number: 123,
      purchase_id: 20220202121317,
      supplier_name: "Hudson",
      total_amount: 5,
      supplier_price: 10,
      purchase_date: "2022-02-02",
    },
    {
      sl: 6,
      invoice_number: 123,
      purchase_id: 20220202121317,
      supplier_name: "Hudson",
      total_amount: 5,
      supplier_price: 10,
      purchase_date: "2022-02-02",
    },
  ]

  const summary = [
    {
      column: "total_amount",
      summaryType: "sum",
      valueFormat: "currency",
    },
  ]

  const reportColumns = [
    {
      field: "sl",
      caption: t("SL."),
    },
    {
      field: "product Name",
      caption: t("product Name"),
    },
    {
      field: "Qnty",
      caption: t("Qnty"),
    },
    {
      field: "Rate",
      caption: t("Rate"),
    },
    {
      field: "Discount (%)",
      caption: t("Discount (%)"),
    },
    {
      field: "Dis. Value",
      caption: t("Dis. Value"),
    },
    {
      field: "Vat (%)",
      caption: t("Vat (%)"),
    },
    {
      field: "Vat Value",
      caption: t("Vat Value"),
    },
    {
      field: "Total Amount",
      caption: t("Total Amount"),
      format: "currency",
    },
  ]

  const reportData = [{}]

  const reportSummary = [
    {
      column: "Total Amount",
      summaryType: "sum",
      valueFormat: "currency",
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

  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  useEffect(() => {
    console.log(values)
  }, [values, startDate, endDate])

  return (
    <>
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
      <FormComponent title={"Manage Purchase"}>
        <MasterTable
          allowDelete
          allowUpdate
          allowPaging
          allowExcel
          allowPrint
          columnChooser={false}
          dataSource={data}
          colAttributes={columns}
          ColoredRows
          summaryItems={summary}
        >
          <Column type="buttons" width={120}>
            <Button
              hint={t("Purchase Details")}
              icon="copy"
              visible={true}
              // disabled={false}
              onClick={() => setClicked(true)}
            />
            <Button name="edit" />
          </Column>

          {clicked && (
            <Popup
              title={t("Purchase Details")}
              height={"90vh"}
              visible={clicked}
              onHiding={() => setClicked(false)}
            >
              <ScrollView width="100%" height="100%">
                <div ref={componentRef}>
                  <ReportTable
                    hideHeader
                    caption={caption}
                    columns={reportColumns}
                    data={reportData}
                    summary={reportSummary}
                  />
                  <ButtonComponent
                    style={{
                      width: "100px",
                      float: "right",
                      marginTop: 20,
                    }}
                    title={"Print"}
                    onClick={handlePrint}
                  />
                </div>
              </ScrollView>
            </Popup>
          )}
        </MasterTable>
      </FormComponent>
    </>
  )
}

export default ManagePurchase
