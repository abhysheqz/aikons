import React from "react";
const CursorProgress_04: React.FC<
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
        d="m2 2 16 6.222-7.111 2.667L8.222 18z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 13s-1 .818-1 2.454 2 2.455 2 4.092-1 2.454-1 2.454m0-9a4.5 4.5 0 0 0-4.5 4.5m4.5-4.5a4.5 4.5 0 0 1 4.5 4.5M17.5 22a4.5 4.5 0 0 0 4.5-4.5M17.5 22a4.5 4.5 0 0 1-4.5-4.5m9 0s-.818-1-2.454-1-2.455 2-4.091 2-2.455-1-2.455-1"
      />
    </svg>
  );
};
export default CursorProgress_04;
