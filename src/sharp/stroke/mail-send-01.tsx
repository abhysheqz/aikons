import React from "react";
const MailSend_01: React.FC<
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
        d="M22 12V3.5H2v17h9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2 7 10 5 10-5M14 17.5h7.494M19 20.5l3-3-3-3"
      />
    </svg>
  );
};
export default MailSend_01;
