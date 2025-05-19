import React from "react";
const MailRemove_01: React.FC<
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
        d="m14 14.5 3.5 3.5m0 0 3.5 3.5M17.5 18 14 21.5m3.5-3.5 3.5-3.5"
      />
    </svg>
  );
};
export default MailRemove_01;
