import React from "react";
const StrokeInside: React.FC<
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
      <path fill="currentColor" d="M7 19.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
      <path
        fill="currentColor"
        d="M2.75 1A1.75 1.75 0 0 0 1 2.75v13.74a4.25 4.25 0 0 1 6.01 6.01h13.74a1.75 1.75 0 0 0 1.75-1.75v-7A1.75 1.75 0 0 0 20.75 12h-9a.25.25 0 0 1-.25-.25v-9A1.75 1.75 0 0 0 9.75 1z"
      />
    </svg>
  );
};
export default StrokeInside;
