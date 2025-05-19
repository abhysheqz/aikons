import React from "react";
const Zap: React.FC<
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
        d="M15.313 8.5H19a.75.75 0 0 1 .53 1.28L6.616 22.5 9.039 13H5a.75.75 0 0 1-.684-1.058L9.015 1.5h10.273z"
      />
    </svg>
  );
};
export default Zap;
