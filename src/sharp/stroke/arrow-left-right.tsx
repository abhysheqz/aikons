import React from "react";
const ArrowLeftRight: React.FC<
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
        strokeWidth={1.5}
        d="M4 17h15.557M16 21l4-4-4-4M20 7H4.43M8 3 4 7l4 4"
      />
    </svg>
  );
};
export default ArrowLeftRight;
