import React from "react";

const DropIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      fill="currentColor"
      aria-hidden="true"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.47 2.22c.3-.3.77-.3 1.06 0 .4.4 2 2.13 3.5 4.36C17.5 8.78 19 11.63 19 14.25c0 2.52-.75 4.48-2.04 5.8A6.78 6.78 0 0 1 12 22a6.78 6.78 0 0 1-4.96-1.94C5.74 18.73 5 16.77 5 14.25c0-2.62 1.5-5.46 2.97-7.67 1.5-2.23 3.1-3.96 3.5-4.36Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default DropIcon;
