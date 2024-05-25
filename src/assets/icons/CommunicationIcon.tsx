import React from "react";

const CommunicationIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      fill="currentColor"
      aria-hidden="true"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4.5A8.5 8.5 0 0 0 5.98 19a.75.75 0 0 1-1.06 1.06 10 10 0 1 1 14.15 0 .75.75 0 0 1-1.05-1.05A8.5 8.5 0 0 0 12 4.5ZM12 8a5 5 0 0 0-3.53 8.54.75.75 0 0 1-1.06 1.06 6.5 6.5 0 1 1 9.19 0 .75.75 0 0 1-1.07-1.06A5 5 0 0 0 12 8Zm0 2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM11 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default CommunicationIcon;
