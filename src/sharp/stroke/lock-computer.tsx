import React from "react";
const LockComputer: React.FC<
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
        d="M12.014 3H2v15h20v-4M10.5 15h3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.5 5.5V4a2 2 0 1 0-4 0v1.5m-1.5 0h7V11h-7zM12.004 17.964v4.031m0 0h3.995m-3.995 0h-4"
      />
    </svg>
  );
};
export default LockComputer;
