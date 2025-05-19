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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 5h8c2.828 0 4.243 0 5.121.879C21 6.757 21 8.172 21 11v2c0 2.828 0 4.243-.879 5.121C19.243 19 17.828 19 15 19H7M3 3v18"
      />
    </svg>
  );
};
export default StrokeLeft;
