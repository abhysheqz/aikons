import React from "react";
const ArrowUp_02: React.FC<
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
        d="m18 9.473-1.414 1.408L13 7.311V20.5h-2V7.311l-3.587 3.57L6 9.473 12 3.5z"
      />
    </svg>
  );
};
export default ArrowUp_02;
