import React from "react";
import "./TypeForm.scss";

import { ReactTypeformEmbed } from "react-typeform-embed";

function TypeForm() {
  return (
    <div className="TypeForm">
      <ReactTypeformEmbed url="https://form.typeform.com/to/XVcDNLcm?typeform-medium=embed-snippet" />
    </div>
  );
}

export default TypeForm;
