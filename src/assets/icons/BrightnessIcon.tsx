import React from "react";

const BrightnessIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="currentColor"
      aria-hidden="true"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 3.5c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-1.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm7.75-2.75a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0 0 1.5h1ZM12 18c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75Zm-6.75-5.25a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0 0 1.5h1Zm.97-6.53c.3-.3.77-.3 1.06 0l.5.5a.75.75 0 0 1-1.06 1.06l-.5-.5a.75.75 0 0 1 0-1.06Zm1.06 11.56a.75.75 0 0 1-1.06-1.06l.5-.5a.75.75 0 0 1 1.06 1.06l-.5.5Zm10.5-11.56a.75.75 0 0 0-1.06 0l-.5.5a.75.75 0 0 0 1.06 1.06l.5-.5c.3-.3.3-.77 0-1.06Zm-1.06 11.56a.75.75 0 1 0 1.06-1.06l-.5-.5a.75.75 0 1 0-1.06 1.06l.5.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BrightnessIcon;