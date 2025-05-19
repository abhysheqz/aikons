import React from "react";
const Bread_03: React.FC<
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
        d="M15 11c0-2.761-1.899-5-4.241-5C9.126 6 7.5 7 7 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 11c0-2.21-1.518-4-3.391-4-.582 0-1.13.173-1.609.478M22 12c0 3.314-4.477 6-10 6S2 15.314 2 12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.89 11C8.5 9.275 7.13 8 5.5 8 3.567 8 2 9.79 2 12c0 1.657 4.477 3 10 3s10-1.343 10-3c0-.995-1.55-2.978-3.469-3"
      />
    </svg>
  );
};
export default Bread_03;
