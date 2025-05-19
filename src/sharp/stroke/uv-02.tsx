import React from "react";
const Uv_02: React.FC<
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
        d="m19.07 5.929-1.768 1.767M12 3v2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 13a5 5 0 0 0-10 0"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 13h-2.5M4.5 13H2M6.697 7.696 4.93 5.93M13 16l2 5h1l2-5M10 16v5H6.01a.01.01 0 0 1-.01-.01V16"
      />
    </svg>
  );
};
export default Uv_02;
