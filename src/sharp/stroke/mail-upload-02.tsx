import React from "react";
const MailUpload_02: React.FC<
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
        d="M22 10.5v-8H2v17h12"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m6 7 6 4 6-4M19 21.5v-7.595M16 16.5l3-3 3 3"
      />
    </svg>
  );
};
export default MailUpload_02;
