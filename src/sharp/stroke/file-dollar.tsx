import React from "react";
const FileDollar: React.FC<
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
        d="M18 11v1.5m0 0c-1.519 0-2.75.929-2.75 2.074 0 1.146.75 1.778 2.75 1.778s3 .593 3 2.074c0 1.482-1.343 2.074-3 2.074m0-8c1.519 0 2.75.929 2.75 2.074M18 20.5V22m0-1.5c-1.657 0-3-.928-3-2.074"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M10 2v7H3" />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.968 8.992V2.014a.01.01 0 0 0-.01-.01H9.957L3 8.99V21.99q0 .01.01.01h9.97"
      />
    </svg>
  );
};
export default FileDollar;
