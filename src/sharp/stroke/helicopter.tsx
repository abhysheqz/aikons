import React from "react";
const Helicopter: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 4v4M16 8H6L4.5 6H2l1 4 7 2 3 5h9v-3a6 6 0 0 0-6-6Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.5 14h-1.499a6 6 0 0 1-6-6M12 20h3m7 0h-3m0 0v-3m0 3h-4m0 0v-3M10 4h8"
      />
    </svg>
  );
};
export default Helicopter;
