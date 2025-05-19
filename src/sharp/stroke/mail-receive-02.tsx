import React from "react";
const MailReceive_02: React.FC<
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
        d="M22 13.5v-10H2v17h10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m6 8 6 4 6-4M22 17.5h-7.575m2.575 3-3-3 3-3"
      />
    </svg>
  );
};
export default MailReceive_02;
