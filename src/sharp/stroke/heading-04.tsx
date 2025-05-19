import React from "react";
const Heading_04: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M3 5v14M13 5v14" />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16 10v4h4m0 0v4m0-4v-4"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M3 12h10" />
    </svg>
  );
};
export default Heading_04;
