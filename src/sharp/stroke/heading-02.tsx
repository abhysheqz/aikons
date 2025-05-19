import React from "react";
const Heading_02: React.FC<
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
        d="M3 5v14M13.144 5v14M3 12h10.144M16.178 12.391c0-1.09.448-2.57 2.395-2.363 1.763.187 2.202 2.6 1.029 3.737l-3.416 3.236v1.018h4.816"
      />
    </svg>
  );
};
export default Heading_02;
