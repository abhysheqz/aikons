import React from "react";
const NintendoSwitch: React.FC<
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
        d="M10.5 2H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h4.5zM13.5 6H18a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-4.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.25 14h-.009M17.75 10h-.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.25 5v4m-2-2h4M17.75 19v-4m2 2h-4"
      />
    </svg>
  );
};
export default NintendoSwitch;
