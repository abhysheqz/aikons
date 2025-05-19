import React from "react";
const Campfire: React.FC<
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
        d="M17.67 16c.843-1.18 1.33-2.59 1.33-4 0-2.5-1.5-5-1.5-5l-2 2c0-5-3.5-7-3.5-7S8.5 4 8.5 9l-2-2S5 9.5 5 12c0 1.41.487 2.82 1.329 4"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M20 19H4v3h16z" />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M14.5 16c0-2.5-2.5-5-2.5-5s-2.5 2.5-2.5 5"
      />
    </svg>
  );
};
export default Campfire;
