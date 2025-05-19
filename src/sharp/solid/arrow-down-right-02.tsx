import React from "react";
const ArrowDownRight_02: React.FC<
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
        fill="currentColor"
        d="M17.869 10.09 19.003 19l-8.913-1.131 3.182-3.182L5 6.414 6.414 5l8.273 8.272z"
      />
    </svg>
  );
};
export default ArrowDownRight_02;
