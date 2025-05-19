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
        d="M15.586 7H11V5h8v8h-2V8.414L6.414 19 5 17.586z"
      />
    </svg>
  );
};
export default ArrowUpRight_01;
