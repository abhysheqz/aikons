import React from "react";
const NoteDone: React.FC<
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
        fillRule="evenodd"
        d="M22.75 15.793 16.043 22.5l-2.707-2.707 1.414-1.414 1.293 1.293 5.293-5.293z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 3h3V1.5h2V3h3V1.5h2V3h3a.75.75 0 0 1 .75.75v9.094l-4.707 4.707-1.293-1.293-3.535 3.535L13.92 22.5H2a.75.75 0 0 1-.75-.75v-18A.75.75 0 0 1 2 3h3V1.5h2zm0 7.5h8V9H7zm0 5h4V14H7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NoteDone;
