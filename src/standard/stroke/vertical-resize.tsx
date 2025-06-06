import React from "react";
const VerticalResize: React.FC<
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
        d="M4 10h16M4 14h16M12 10V6M12 18v-4M9 7l3-5 3 5-3-1zM9 17l3 5 3-5-3 1z"
      />
    </svg>
  );
};
export default VerticalResize;
