import React from "react";
const ArrowDownLeft_02: React.FC<
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
        d="M6.132 10.09 4.998 19l8.913-1.131-3.182-3.182L19 6.414 17.587 5l-8.273 8.272z"
      />
    </svg>
  );
};
export default ArrowDownLeft_02;
