import React from "react";
const MoveTo: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M9 5h10" />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 5h.009M5 11.007h.009M5 17.014h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9 11.007h10M9 17.014h9M16.008 15.017l1.976 1.986-1.976 2"
      />
    </svg>
  );
};
export default MoveTo;
