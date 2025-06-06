import React from "react";
const Reload: React.FC<
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
        d="m14.5 2 1 2.548A8.5 8.5 0 0 0 3 12.05c0 1.79.554 3.58 1.5 4.95M8.5 22l-1-2.548A8.5 8.5 0 0 0 20 11.95c0-1.791-.554-3.58-1.5-4.95"
      />
    </svg>
  );
};
export default Reload;
