import React from "react";
const Pizza_02: React.FC<
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
        d="M19.494 4.057C17.118 2.718 14.603 2 12 2s-5.118.718-7.494 2.057c-.7.394-1.05.591-1.165.981s.087.771.49 1.533L12 22l8.168-15.43c.404-.76.605-1.142.49-1.532s-.464-.587-1.164-.981Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 7.986a3.6 3.6 0 0 1-.819-1.014c-.873-1.62-2.89-2.342-4.662-1.67a3.87 3.87 0 0 1-2.802-.026c-1.758-.705-3.79-.02-4.695 1.584C5.768 7.31 5.418 7.697 5 8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6 10.505A2.47 2.47 0 0 1 7.5 10c1.38 0 2.5 1.13 2.5 2.525A2.52 2.52 0 0 1 8 15"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.009 9H14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 12.5c-1 0-2 1-2 2"
      />
    </svg>
  );
};
export default Pizza_02;
