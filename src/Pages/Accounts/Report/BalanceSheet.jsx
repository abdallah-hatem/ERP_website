import React, { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import ReportTable from "../../Closing/ReportTable"
import SearchBar from "../../Closing/SearchBar"
import { useReactToPrint } from "react-to-print"
import ButtonComponent from "../../../Components/Web Components/ButtonComponent/ButtonComponent"

function BalanceSheet() {
  const { t } = useTranslation()

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

  const columns = [
    {
      field: "Particulars",
      caption: "Particulars",
    },
    {
      field: "Amount",
      caption: "Amount",
    },
  ]

  const data = [
    {
      Particulars: "Total Current Assets",
    },
    {
      Particulars: "Total Non-current assets",
    },
    {
      Particulars: "Total Fixed assets",
    },
    {
      Particulars: "Total Current Liabilities",
    },
    {
      Particulars: "Total Non-current liabilities",
    },
    {
      Particulars: "Total Income",
    },
    {
      Particulars: "Total Expense",
    },
  ]

  //   const summary = [
  //     {
  //       column: "Amount",
  //       summaryType: "sum",
  //       valueFormat: "currency",
  //     },
  //   ];

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

      <div className="d-flex justify-content-end mb-2">
        <ButtonComponent
          title={"Print"}
          style={{ width: "100px" }}
          onClick={handlePrint}
        />
      </div>

      <div ref={componentRef}>
        <ReportTable title="Balance Sheet" data={data} columns={columns} />
      </div>
    </>
  )
}

export default BalanceSheet
