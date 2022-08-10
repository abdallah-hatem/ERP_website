import React from "react";
import QRCode from "react-qr-code";

function QrCodeGenerator({
   value = "",
   displayValue = false,
   size = 150,
   style,
   label,
}) {
   return (
      <div className="d-flex flex-column align-items-center">
         {label && <p style={style}>{label}</p>}
         <QRCode size={size} value={value} />
         {displayValue && <p className="mt-1">{value}</p>}
      </div>
   );
}

export default QrCodeGenerator;
