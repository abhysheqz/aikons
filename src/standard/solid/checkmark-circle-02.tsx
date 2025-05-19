import React from "react";
const CheckmarkCircle_02: React.FC<
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
        fillRule="evenodd"
        d="M11.75 22.5C5.813 22.5 1 17.687 1 11.75S5.813 1 11.75 1 22.5 5.813 22.5 11.75 17.687 22.5 11.75 22.5m4.768-13.11a1 1 0 1 0-1.536-1.28l-4.3 5.159-2.225-2.226a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.475-.067z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckmarkCircle_02;
