import React from "react";
const MailAccount_02: React.FC<
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
        d="M22 10.5v-8H2v17h10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m6 7 6 4 6-4M22 21.5h-7a3.5 3.5 0 1 1 7 0ZM20.25 14.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z"
      />
    </svg>
  );
};
export default MailAccount_02;
