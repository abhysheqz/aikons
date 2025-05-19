import React from "react";
const MailEdit_01: React.FC<
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
        d="M22 10.5V3H2v17h9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2 6.5 10 5 10-5M19.556 13.01l-5.575 5.509v2.477h2.51l5.507-5.543a.01.01 0 0 0 0-.01zm0 0c.003-.002-.002-.002 0 0Z"
      />
    </svg>
  );
};
export default MailEdit_01;
