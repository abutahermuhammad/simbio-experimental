import React from "react";

const ContactCardIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      fill="currentColor"
      aria-hidden="true"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.75 4C20.99 4 22 5 22 6.25v11.5C22 19 21 20 19.75 20H4.25C3.01 20 2 19 2 17.75V6.25C2 5.01 3 4 4.25 4h15.5Zm0 1.5H4.25a.75.75 0 0 0-.75.75v11.5c0 .42.34.75.75.75h15.5c.41 0 .75-.33.75-.75V6.25a.75.75 0 0 0-.75-.75Zm-10 7c.41 0 .75.34.75.75v.6c-.17 1.11-1.1 1.65-2.5 1.65s-2.33-.54-2.5-1.65v-.6c0-.41.34-.75.75-.75h3.5Zm3.5.5h4.5a.75.75 0 0 1 .1 1.49h-4.6a.75.75 0 0 1-.1-1.49h4.6-4.5ZM8 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5.25 1h4.5a.75.75 0 0 1 .1 1.5h-4.6a.75.75 0 0 1-.1-1.5h4.6-4.5Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default ContactCardIcon;
