import React from "react";
const MailDownload_01: React.FC<
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
        d="M22 11V3H2v17h11"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2 6.5 10 5 10-5M19 13v7.495M16 18l3 3 3-3"
      />
    </svg>
  );
};
export default MailDownload_01;
