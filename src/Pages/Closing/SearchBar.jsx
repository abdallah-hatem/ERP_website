import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import InputComponent from "../../Components/Web Components/InputComponent/InputComponent";
import DatePicker from "react-datepicker";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";

function SearchBar({
   handleChange,
   children,
   handleSubmit,
   data = [],
   listView = false,
   showButton = true,
   buttonTitle = "Search",
   buttonWidth = "100px",
   colWidth = "8",
   width = "100%",
   containerWidth,
   labelWidth,
   dateData = [],
   startDate,
   endDate,
   setValidDate,
   values,
   title,
   hideCard = true,
   hideHeader,
   CardTitle,
   hideDays = false,
}) {
   const { t } = useTranslation();

   useEffect(() => {
      function formattedDate(name) {
         return `${!hideDays ? name.getDate() : ""}/${
            name.getMonth() + 1
         }/${name.getFullYear()}`;
      }

      if (startDate > endDate) {
         setValidDate && setValidDate(false);
      } else {
         setValidDate && setValidDate(true);
      }

      dateData.map((el) => (values[el.value] = formattedDate(el.selected)));
   }, [startDate, endDate]);

   return (
      <FormComponent
         title={CardTitle}
         hideCard={hideCard}
         hideHeader={hideHeader}
      >
         {title && (
            <h3
               className="m-0 mt-5"
               style={{ textAlign: "center", fontSize: "22px" }}
            >
               {t(title)}
            </h3>
         )}

         <div
            className={
               !listView
                  ? "d-flex justify-content-between align-items-center flex-wrap"
                  : `col-lg-${colWidth}`
            }
         >
            {data.map((el) => (
               <InputComponent
                  label={t(el.label)}
                  placeholder={t(el.placeholder)}
                  chooseOptions={el.chooseOptions}
                  textArea={el.textArea}
                  options={el.options}
                  type={el.type}
                  handleChange={el.handleChange}
                  // width={!listView && width}
                  // width={width}
                  name={el.name}
                  value={el.value}
                  disabled={el.disabled}
                  labelWidth={el.labelWidth || labelWidth}
                  containerWidth={containerWidth}
                  children={el.children}
               />
            ))}

            {dateData.length > 0 &&
               dateData.map((el) => (
                  <InputComponent
                     labelWidth={labelWidth}
                     // width={width}
                     containerWidth={containerWidth}
                     label={el.label}
                  >
                     <DatePicker
                        dateFormat={!hideDays ? "dd/MM/yyyy" : "MM/yyyy"}
                        selected={el.selected}
                        onChange={(date) => el.onChange(date)}
                        showMonthYearPicker={el.showMonthYearPicker}
                     />
                  </InputComponent>
               ))}

            {children}

            {showButton && (
               <ButtonComponent
                  style={{ width: buttonWidth, float: listView && "right" }}
                  onClick={handleSubmit}
                  title={t(buttonTitle)}
               />
            )}
         </div>
      </FormComponent>
   );
}

export default SearchBar;
