import React from "react";
const MailEdit_02: React.FC<
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
        d="M22 11.002V3H2v17.004h9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m6 7.5 6 4 6-4M19.557 13.011l-5.576 5.51v2.477h2.51l5.507-5.544a.01.01 0 0 0 0-.01zm0 0c.003-.002-.003-.002 0 0Z"
      />
    </svg>
  );
};
export default MailEdit_02;
