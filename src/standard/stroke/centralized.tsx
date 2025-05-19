import React from "react";
const Centralized: React.FC<
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
        d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 17.5h-3.5V21m4 .5-3.57-3.57M3 17.5h3.5V21m-4 .5 3.57-3.57M21 6.5h-3.5V3m4-.5-3.57 3.57M3 6.5h3.5V3m-4-.5 3.57 3.57"
      />
    </svg>
  );
};
export default Centralized;
