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
        d="M21 5c-2.81-1.942-5.84-3-9-3S5.81 3.058 3 5l9 17z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 7.986a3.6 3.6 0 0 1-.819-1.014c-.873-1.62-2.89-2.342-4.662-1.67a3.87 3.87 0 0 1-2.802-.026c-1.758-.705-3.79-.02-4.695 1.584C5.768 7.31 5.418 7.697 5 8M6 10.329c.39-.21.841-.329 1.322-.329C8.801 10 10 11.13 10 12.524c0 .996-.612 1.857-1.5 2.267"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.008 9h-.01"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 12.5c-1 0-2 1-2 2"
      />
    </svg>
  );
};
export default Pizza_02;
