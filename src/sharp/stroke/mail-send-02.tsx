import React from "react";
const MailSend_02: React.FC<
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
        d="M22 12.5v-9H2v17h10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m6 8 6 4 6-4M14 17.5h7.6m-2.6 3 3-3-3-3"
      />
    </svg>
  );
};
export default MailSend_02;
