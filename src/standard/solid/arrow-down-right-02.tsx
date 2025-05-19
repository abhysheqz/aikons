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
        fillRule="evenodd"
        d="M5.293 5.293a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.316 10.051a1 1 0 0 1 .674.808l1 7a1 1 0 0 1-1.131 1.13l-7-1a1 1 0 0 1-.566-1.696l6-6a1 1 0 0 1 1.023-.242"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowDownRight_02;
