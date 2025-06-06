import React from "react";
const KeyframesMultiple: React.FC<
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
        d="m13.532 13.324-4.108 4.99a1.82 1.82 0 0 1-2.848 0l-4.108-4.99a2.106 2.106 0 0 1 0-2.648l4.108-4.99a1.82 1.82 0 0 1 2.848 0l4.108 4.99c.624.758.624 1.89 0 2.648Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17 19 4.551-5.698a2.11 2.11 0 0 0 0-2.604L17 5"
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
export default KeyframesMultiple;
