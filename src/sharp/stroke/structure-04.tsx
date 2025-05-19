import React from "react";
const Structure_04: React.FC<
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
        d="M10 15V9H2v6zM22 10V4h-8v6zM22 20v-6h-8v6zM14 7l-3 5 3 5"
      />
    </svg>
  );
};
export default Structure_04;
