import React from "react";
const KeyframesMultipleAdd: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 15V9m-3 3h6M6.5 5.687a1.9 1.9 0 0 1 2.924 0l4.108 4.989c.624.758.624 1.89 0 2.648l-4.108 4.99a1.9 1.9 0 0 1-2.924 0M17 19l4.551-5.698a2.11 2.11 0 0 0 0-2.604L17 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13 19 4.551-5.698a2.11 2.11 0 0 0 0-2.604L13 5"
      />
    </svg>
  );
};
export default KeyframesMultipleAdd;
