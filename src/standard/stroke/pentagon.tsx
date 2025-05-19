import React from "react";
const Pentagon: React.FC<
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
        d="m13.248 3 7.66 6.129a2 2 0 0 1 .649 2.194l-3.101 9.31A2 2 0 0 1 16.558 22H7.442a2 2 0 0 1-1.898-1.367l-3.103-9.31a2 2 0 0 1 .648-2.194l7.66-6.13a2 2 0 0 1 2.499 0Z"
      />
    </svg>
  );
};
export default Pentagon;
