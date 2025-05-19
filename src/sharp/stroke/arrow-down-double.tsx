import React from "react";
const ArrowDownDouble: React.FC<
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
        d="m17.999 12.5-6 6-6-6M17.999 5.5l-6 6-6-6"
      />
    </svg>
  );
};
export default ArrowDownDouble;
