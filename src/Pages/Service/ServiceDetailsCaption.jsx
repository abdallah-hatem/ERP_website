import React from "react";

function ServiceDetailsCaption() {
  return (
    <div class="row print_header d-flex justify-content-between align-items-center">
      <div class="col-xs-4">
        <img
          src="https://saleserpnew.bdtask.com/saleserp_v9.9_demo/assets/img/icons/2022-02-02/adc406eeef54c9a25db184e7d50ba8ec.png"
          class="img-bottom-m print-logo invoice-img-position"
          alt=""
        />
        <br />
        <span class="label label-success-outline m-r-15 p-10">
          Billing From
        </span>
        <address class="margin-top10">
          <strong class="">Demo Company</strong>
          <br />
          <span class="comp-web">Company Demo Address</span>
          <br />
          <abbr class="font-bold">Mobile: </abbr>
          123456 <br />
          <abbr>
            <b>Email:</b>
          </abbr>
          demo@mail.com
          <br />
          <abbr>
            <b>Website:</b>
          </abbr>
          <span class="comp-web">https://www.demo.com/</span>
          <br />
        </address>
      </div>
      <div class="col-xs-4">
        <div class="print-qr">
          <img
            src="http://chart.apis.google.com/chart?cht=qr&amp;chs=250x250&amp;chld=L|4&amp;chl=SW52b2ljZSBObzogODc1MzMzNjkxMiBDdXN0b21lciBOYW1lOiBKaG9u"
            alt=""
          />
        </div>
      </div>
      <div class="col-xs-4 text-left ">
        <h2 class="m-t-0 test-class">Service Invoice</h2>
        <div>
          <abbr class="font-bold">Invoice No:</abbr>
          8753336912{" "}
        </div>
        <div class="m-b-15">
          <abbr class="font-bold">Date:</abbr>3 - FEB - 2022{" "}
          <div class="m-b-15">
            <abbr class="font-bold">Invoice Time: </abbr>
            05:50:49{" "}
          </div>
          <span class="label label-success-outline m-r-15">Billing To</span>
          <address style={{ marginTop: "10px" }} class="">
            <strong class="">Jhon </strong>
            <br />
            Lorem ipsum dolor sit amet. <br />
            <abbr class="font-bold">Mobile: </abbr>
            46545455 <br />
            <abbr class="font-bold">VAT NO: </abbr>
            31016699533 <br />
            <abbr class="font-bold">CR NO: </abbr>
            1010942966897
          </address>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailsCaption;
