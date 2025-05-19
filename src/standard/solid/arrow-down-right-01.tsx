import React from "react";
const ArrowDownRight_01: React.FC<
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
        d="M6.707 5.292a1 1 0 1 0-1.414 1.414l10.294 10.295L11 17a1 1 0 0 0 0 2l7 .001a1 1 0 0 0 1.001-1L19 11a1 1 0 0 0-2 0v4.586z"
      />
    </svg>
  );
};
export default ArrowDownRight_01;
