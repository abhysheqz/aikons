import React from "react";
const Road: React.FC<
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
        d="M3 12v10H1V12zM23 12v10h-2V12zM13 16v2h-2v-2zm0 4v2h-2v-2zM7.206 2.657A.97.97 0 0 1 8.125 2h7.75c.417 0 .787.265.919.657l1.1 3.275.938-.465.867 1.72-1.002.497.915 1.513c.09.15.138.32.138.495v3.846a.965.965 0 0 1-.969.962H5.22a.965.965 0 0 1-.969-.962V9.692c0-.174.048-.345.138-.495l.915-1.513-1.002-.497.867-1.72.938.465zm.81 3.67h7.968l-.808-2.404H8.823zM6 11.5h1.5V10H6zM18 10h-1.5v1.5H18zm-8 2h4v-1.5h-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 16v-2h2v2zm10 0v-2h2v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Road;
