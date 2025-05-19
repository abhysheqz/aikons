import React from "react";
const MailReplyAll_01: React.FC<
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
        d="M22 13V2.5H2v17h7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2 6 10 5 10-5M13.5 18.5 11 16l2.5-2.5M21.972 21.5c0-.436.304-2.872-1.1-4.291-1.558-1.575-4.112-1.145-5.387-1.152m2.015-2.514-2.497 2.473 2.497 2.51"
      />
    </svg>
  );
};
export default MailReplyAll_01;
