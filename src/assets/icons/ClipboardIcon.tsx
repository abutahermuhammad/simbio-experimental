import React from "react";

const ClipboardIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      fill="currentColor"
      aria-hidden="true"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.38 5.5H6.25a.75.75 0 0 0-.75.75v13.5c0 .41.34.75.75.75h11.5c.41 0 .75-.34.75-.75V6.25a.75.75 0 0 0-.75-.75h-2.13c-.4.6-1.09 1-1.87 1h-3.5c-.78 0-1.47-.4-1.87-1Zm7.6-1.5h1.77C18.99 4 20 5 20 6.25v13.5c0 1.24-1 2.25-2.25 2.25H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.12 1.08-2 2.24-2h3.5c1.16 0 2.11.88 2.24 2Zm-6.48.25c0 .41.34.75.75.75h3.5a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ClipboardIcon;
