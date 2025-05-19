import React from "react";
const Factory_02: React.FC<
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
        d="m8.988 11.029 7.007-3.99v3.99L22 7.039v13.962H10.144"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.983 6.05h4M11.992 15.017h2.002M16.996 15.017h2.002"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m3.999 3.008-2 17.99h8.023l-2.04-17.99a.01.01 0 0 0-.01-.01H4.008a.01.01 0 0 0-.01.01Z"
      />
    </svg>
  );
};
export default Factory_02;
