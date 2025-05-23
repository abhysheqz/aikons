import React from "react";
const HandBeater: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 19.5a3.5 3.5 0 0 0-6-2.45L7.45 22a3.5 3.5 0 0 0 1.05-2.5M7.5 17l4-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 9.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m22.5 6-4-4c-.846 1.41-1.844 2.302-3.007 2.924-1.757.941-3.401 2.2-4.083 4.073L10.5 11.5 13 14l2.503-.91c1.874-.682 3.132-2.325 4.073-4.083C20.2 7.845 21.092 6.846 22.5 6"
      />
    </svg>
  );
};
export default HandBeater;
