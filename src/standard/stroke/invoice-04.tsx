import React from "react";
const Invoice_04: React.FC<
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
        d="M4.5 21 5.82 7.801A2 2 0 0 1 7.81 6h8.38a2 2 0 0 1 1.99 1.801L19.5 21 17 20l-2.5 2-2.5-2-2.5 2L7 20zM11.5 10H9M14.5 14H9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 9.5c-1 0-1-1.26-1-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3.5c0 .74 0 2-1 2"
      />
    </svg>
  );
};
export default Invoice_04;
