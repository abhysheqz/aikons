import React from "react";
const StrokeBottom: React.FC<
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
        d="M5 17V9c0-2.828 0-4.243.879-5.121C6.757 3 8.172 3 11 3h2c2.828 0 4.243 0 5.121.879C19 4.757 19 6.172 19 9v8M3 21h18"
      />
    </svg>
  );
};
export default StrokeBottom;
