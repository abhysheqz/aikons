import React from "react";
const MailValidation_02: React.FC<
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
        d="M22 11V2H2v17h8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2 5.5 10 5 10-5M14.75 17l1.5 1.5 3-3M22 17a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      />
    </svg>
  );
};
export default MailValidation_02;
