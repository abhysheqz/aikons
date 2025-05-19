import React from "react";
const MailAtSign_01: React.FC<
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
        d="M22 11V2.5H2v17h8"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m2 6 10 5 10-5" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 17a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 0v.5a1.5 1.5 0 0 0 3 0V17a4.5 4.5 0 1 0-4.5 4.5"
      />
    </svg>
  );
};
export default MailAtSign_01;
