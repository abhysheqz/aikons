import React from "react";
const MailSearch_01: React.FC<
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
        d="M22 11V2.5H2v17h9"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m2 6 10 5 10-5" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.017 19.523 22 21.5m-.947-4.474a3.527 3.527 0 1 0-7.053 0 3.527 3.527 0 0 0 7.053 0Z"
      />
    </svg>
  );
};
export default MailSearch_01;
