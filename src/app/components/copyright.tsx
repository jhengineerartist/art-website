import React from "react";

export default function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <p className="text-enchilada-200">
        &copy; {currentYear} Jose Hirshman. All rights reserved.
      </p>
    </div>
  );
}
