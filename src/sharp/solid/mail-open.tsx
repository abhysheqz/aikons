import React from "react";
const MailOpen: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m4.469 6.47 1.062 1.06-2.29 2.296 8.76 4.82 8.76-4.82-2.292-2.296 1.062-1.06 3.219 3.227V22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V9.697z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.25 1.25h15.5v10.4h-1.5v-8.9H5.75v8.9h-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.002 9.25h-6v1.5h6zm0-4h-6v1.5h6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailOpen;
