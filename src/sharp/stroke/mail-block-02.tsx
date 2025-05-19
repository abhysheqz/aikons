import React from "react";
const MailBlock_02: React.FC<
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
        d="M22 12V3H2v17h11"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m6 7.5 6 4 6-4M16.05 15A3.5 3.5 0 1 0 21 19.95M16.05 15A3.5 3.5 0 0 1 21 19.95M16.05 15 21 19.95"
      />
    </svg>
  );
};
export default MailBlock_02;
