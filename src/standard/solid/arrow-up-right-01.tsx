import React from "react";
const ArrowUpRight_01: React.FC<
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
        d="M11 5a1 1 0 1 0 0 2h4.586L5.293 17.293a1 1 0 1 0 1.414 1.414L17 8.414V13a1 1 0 1 0 2 0V6a1 1 0 0 0-.293-.707l-.006-.006A1 1 0 0 0 17.978 5z"
      />
    </svg>
  );
};
export default ArrowUpRight_01;
