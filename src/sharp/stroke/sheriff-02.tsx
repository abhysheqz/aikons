import React from "react";
const Sheriff_02: React.FC<
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
        strokeWidth={1.5}
        d="M15.061 12.083a3.02 3.02 0 0 1-3.015 3.024 3.02 3.02 0 0 1-3.016-3.024 3.02 3.02 0 0 1 3.016-3.025 3.02 3.02 0 0 1 3.015 3.024Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.957 2.119 8.51 6.539H3.148a.1.1 0 0 0-.092.142l2.459 5.413-2.417 5.377a.1.1 0 0 0 .091.142h5.35l3.401 4.427a.1.1 0 0 0 .159 0l3.47-4.427h5.357a.1.1 0 0 0 .091-.143l-2.44-5.348 2.458-5.44a.1.1 0 0 0-.091-.143H15.55l-3.435-4.42a.1.1 0 0 0-.159 0Z"
      />
    </svg>
  );
};
export default Sheriff_02;
