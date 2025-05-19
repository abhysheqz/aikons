import React from "react";
const Toilet_01: React.FC<
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
        d="M8 11h12a6 6 0 0 1-9 5.197"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 13V2H4v11zM6 7h5M16.5 16.5c-2 2-.5 4.5 1.5 5.5H6v-9"
      />
    </svg>
  );
};
export default Toilet_01;
