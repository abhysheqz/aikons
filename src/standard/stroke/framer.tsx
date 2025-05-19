import React from "react";
const Framer: React.FC<
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
        d="m12 21-6-6h6zM12 9l5.983 5.983a.01.01 0 0 1-.007.017H6.01a.01.01 0 0 1-.01-.01V9zm0 0L6.017 3.022a.01.01 0 0 1 .007-.017H18V9z"
      />
    </svg>
  );
};
export default Framer;
