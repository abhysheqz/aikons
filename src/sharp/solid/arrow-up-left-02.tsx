import React from "react";
const ArrowUpLeft_02: React.FC<
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
        d="M6.134 13.91 5 5l8.913 1.131-3.183 3.182 8.273 8.273L17.589 19l-8.273-8.272z"
      />
    </svg>
  );
};
export default ArrowUpLeft_02;
