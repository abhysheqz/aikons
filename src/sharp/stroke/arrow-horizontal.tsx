import React from "react";
const ArrowHorizontal: React.FC<
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
        d="m18 8 4 4-4 4M6 8l-4 4 4 4m15.483-4H2.516"
      />
    </svg>
  );
};
export default ArrowHorizontal;
