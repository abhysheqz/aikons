import React from "react";
const Luggage_01: React.FC<
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
        d="M8.25 3A.75.75 0 0 1 9 2.25h6a.75.75 0 0 1 .75.75v4.25h-1.5v-3.5h-4.5v3.5h-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.25 5.75h-8.5v16h8.5zm1.5 16H21a.75.75 0 0 0 .75-.75V6.5a.75.75 0 0 0-.75-.75h-3.25zM3 5.75h3.25v16H3a.75.75 0 0 1-.75-.75V6.5A.75.75 0 0 1 3 5.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Luggage_01;
