import React from "react";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import "./style.scss";

function ProductDetailsTable() {
  return (
    <FormComponent title="Product Details">
      <div className="product-details-cont">
        <div className="product-cont">
          <div>
            <h3>Product Name : Oven</h3>
            <span>Model : Sm</span>
            <p>Price : $10000</p>
          </div>
          <img
            src="https://saleserpnew.bdtask.com/saleserp_v9.9_demo/my-assets/image/product/2022-02-02/0320a5268f264e3ad2ddd19631484679.jpg"
            alt="pic"
            id="product-details-img"
          />
        </div>
        <div className="info-cont">
          <p>
            Total Purchase : <span>20</span>
          </p>
          <p>
            Stock : <span>7</span>
          </p>
          <p>
            Price : <span>$10000</span>
          </p>
        </div>
      </div>
    </FormComponent>
  );
}

export default ProductDetailsTable;
