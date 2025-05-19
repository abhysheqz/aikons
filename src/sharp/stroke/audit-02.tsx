import React from "react";
const Audit_02: React.FC<
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
        strokeWidth={1.5}
        d="M19.007 11.493V2H3v19.985h9.004"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.002 6.996h8.003m-8.003 3.997h4.001"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.864 19.838a3.37 3.37 0 0 0 1.008-2.442 3.44 3.44 0 0 0-3.44-3.436c-1.9 0-3.44 1.538-3.44 3.436a3.44 3.44 0 0 0 3.44 3.437c.937 0 1.811-.388 2.432-.995Zm0 0L21 21.998"
      />
    </svg>
  );
};
export default Audit_02;
