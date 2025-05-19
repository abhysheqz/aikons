import React from "react";
const BarCode_01: React.FC<
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
        d="M4 4a1 1 0 0 0-2 0v16a1 1 0 1 0 2 0zm4.5 0a1 1 0 0 0-2 0v12a1 1 0 1 0 2 0zM12 3a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1m5.5 1a1 1 0 1 0-2 0v12a1 1 0 1 0 2 0zM21 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1M7.5 18.5a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2zm3.5 1a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m5.5-1a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BarCode_01;
