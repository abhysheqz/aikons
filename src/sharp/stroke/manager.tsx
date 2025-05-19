import React from "react";
const Manager: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M20 22v-7.5L16.5 13H16l-3.5 9h-1L8 13h-.5L4 14.5V22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m12 15-.5 4 .5 1.5.5-1.5zm0 0-1-2h2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 6.5v-1a3.5 3.5 0 0 0-7 0v1a3.5 3.5 0 1 0 7 0Z"
      />
    </svg>
  );
};
export default Manager;
