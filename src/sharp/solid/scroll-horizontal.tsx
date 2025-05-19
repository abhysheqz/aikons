import React from "react";
const ScrollHorizontal: React.FC<
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
        d="M9.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M15.532 7.414a.75.75 0 0 1 .88-.04l6 3.949a.75.75 0 0 1 .008 1.248l-6 4.05a.75.75 0 0 1-1.122-.884L16.699 12l-1.401-3.737a.75.75 0 0 1 .234-.85M8.468 7.414a.75.75 0 0 1 .234.85L7.301 12l1.401 3.737a.75.75 0 0 1-1.122.885l-6-4.051a.75.75 0 0 1 .008-1.248l6-3.95a.75.75 0 0 1 .88.04"
      />
    </svg>
  );
};
export default ScrollHorizontal;
