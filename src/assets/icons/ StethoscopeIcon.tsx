import React from "react";

const StethoscopeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      fill="currentColor"
      aria-hidden="true"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.75 2.5a.75.75 0 0 0-.75.75V9a6 6 0 0 0 5.25 5.95v.8a6 6 0 0 0 12 0v-.84a3 3 0 1 0-1.5 0v.84a4.5 4.5 0 0 1-9 0v-.8A6 6 0 0 0 14 9V3.25a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h1.75v5a4.5 4.5 0 1 1-9 0V4h1.75a.75.75 0 0 0 0-1.5h-2.5Zm15.75 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default StethoscopeIcon;