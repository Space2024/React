// eslint-disable-next-line no-unused-vars
import React from "react";

import QRCode from "react-qr-code";

const App = () => {
  const qrCodeValue = "jayaprakash"; // Replace with your QR code value

  return (
    <div>
      {/* Basic QR Code
      <QRCode value={qrCodeValue} />

      {/* QR Code with custom styles */}
       <div style={{ background: 'white', padding: '16px' }}>
        <QRCode value={qrCodeValue} />
      </div> 
      {/* QR Code with custom size and styles */}
      {/* <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
        <QRCode
          value={qrCodeValue}
          size={256} // Custom size
          style={{ height: "auto", maxWidth: "100%", width: "100%" }} // Custom styles
          viewBox={`0 0 256 256`} // Custom viewBox
        />
      </div> */}
      
    </div>
  );
};



export default App;
