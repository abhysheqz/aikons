import React from "react";
const StrokeLeft: React.FC<
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
        d="M6 5a1 1 0 0 1 1-1h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a1 1 0 1 1 0-2h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7a1 1 0 0 1-1-1M3 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StrokeLeft;
