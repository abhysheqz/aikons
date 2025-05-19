import React from "react";
const Sorting_9: React.FC<
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
        d="M7.25 10V3h-.642L5.25 4.5m2 5.5h-2m2 0h2M9.25 17.5V14h-4v3.5zm0 0V21h-4.5M16.75 4v15.195m-2.5-1.695 2.5 2.5 2.5-2.5"
      />
    </svg>
  );
};
export default Sorting_9;
