import React from "react";
const Download_01: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.095 10Q3 10.687 3 11.4c0 5.302 4.03 9.6 9 9.6s9-4.298 9-9.6q0-.714-.095-1.4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 10.5 12 13l2.5-2.5M12 3v9.391"
      />
    </svg>
  );
};
export default Download_01;
