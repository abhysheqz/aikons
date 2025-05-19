import React from "react";
const Chemistry_02: React.FC<
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M5 3v10c0 3.771 0 5.657 1.172 6.828S9.229 21 13 21h8M3 9h8m9 0h-4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.247 4v2.558c0 1.142 0 1.713.147 2.26.147.549.435 1.052 1.012 2.059l.781 1.364c1.47 2.565 2.205 3.848 1.602 4.799l-.01.014C18.168 18 16.612 18 13.5 18s-4.668 0-5.28-.946l-.009-.014c-.603-.951.132-2.234 1.602-4.799l.781-1.364c.577-1.007.865-1.51 1.012-2.058s.147-1.12.147-2.261V4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 4h6"
      />
    </svg>
  );
};
export default Chemistry_02;
