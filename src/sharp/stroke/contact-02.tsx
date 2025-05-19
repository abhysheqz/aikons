import React from "react";
const Contact_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 2h18v20H4zM6 6H2m4 6H2m4 6H2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m13.561 16.118 1.939-2.132 2.996 1.495a.01.01 0 0 1 .003.016c-1.106 1.307-1.739 1.573-2.615 1.456-1.146-.153-2.86-.893-4.495-2.444-.672-.59-1.325-1.412-2.042-2.54m0 0c-.557-1.266-1.387-2.642-.412-3.875.213-.27.62-.828 1.05-1.087a.01.01 0 0 1 .013.004l1.499 2.996z"
      />
    </svg>
  );
};
export default Contact_02;
