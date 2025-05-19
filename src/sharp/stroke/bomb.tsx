import React from "react";
const Bomb: React.FC<
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
        d="M16 15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 8.5-1-3H7l-1 3M22 7.5 20.5 6m0 0L19 4.5M20.5 6 19 7.5M20.5 6 22 4.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 6c-2.982 0-2.575-2.584-5.109-3.768-2.226-1.04-3.12 1.656-2.841 3.263"
      />
    </svg>
  );
};
export default Bomb;
