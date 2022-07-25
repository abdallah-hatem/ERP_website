import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import FileUploader from "../../Components/Web Components/FileUploader/FileUploader";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import { ImageUploader } from "../../Components/Web Components/ImageUploader/ImageUploader";
import InputComponent from "../../Components/Web Components/InputComponent/InputComponent";
import UploadImageButton from "../../Components/Web Components/UploadImageButton/UploadImageButton";

function AddProductCsv() {
  const { t } = useTranslation();

  return (
    <>
      <FormComponent title="CSV File Information">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <span class="text-warning">
              The first line in downloaded csv file should remain as it is.
              Please do not change the order of columns.
            </span>
            <br />
            <span class="text-info">
              (Serial No,Supplier Name, Product Name, Product Model,Category
              Name ,Sale Price,Supplier Price Product Variants separated by
              vertical bar)
            </span>
            <br />
            Please make sure the csv file is UTF-8 encoded and not saved with
            byte order mark (BOM).
            <p>
              The images should be uploaded in <strong>uploads</strong> folder.
            </p>
          </div>

          <a
            href="https://saleserpnew.bdtask.com/saleserp_v9.9_demo/assets/data/csv/sample_product .csv"
            class="btn btn-primary pull-right"
            style={{ height: "40px" }}
          >
            <i class="fa fa-download"></i> {t("Download Sample File")}
          </a>
          {/* <button>
        <Link to="/Assets/sample_product.csv" target="_blank" download>
          Download
        </Link>
      </button> */}
        </div>
      </FormComponent>

      <FormComponent title="Import Product (CSV)">
        <div className="row">
          <div className="col-lg-10">
            <InputComponent children={false} label={"Upload CSV File :"}>
              <FileUploader />
            </InputComponent>

            <>
              <div style={{ width: "200px", float: "right", marginTop: 20 }}>
                <ButtonComponent
                  // onClick={handleSubmit}
                  title={"Save And Add Another"}
                />
              </div>

              <div style={{ width: "100px", float: "right", marginTop: 20 }}>
                <ButtonComponent
                  //  onClick={handleSubmit}
                  title={"Save"}
                />
              </div>
            </>
          </div>
        </div>
      </FormComponent>
    </>
  );
}

export default AddProductCsv;
