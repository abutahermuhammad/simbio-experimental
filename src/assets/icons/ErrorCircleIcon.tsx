import React from "react";

const ErrorCircleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      fill="currentColor"
      aria-hidden="true"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 1.67a8.34 8.34 0 0 0 0 16.66 8.34 8.34 0 0 0 0-16.66Zm0 10.83a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7c.37 0 .69.28.74.65v4.6a.75.75 0 0 1-1.48.1l-.01-.1v-4.5c0-.41.33-.75.74-.75Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default ErrorCircleIcon;
