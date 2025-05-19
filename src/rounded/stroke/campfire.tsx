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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.67 16c.843-1.18 1.33-2.59 1.33-4 0-4-1.5-5-1.5-5-.538 1.5-2 2-2 2 0-5.5-3.5-7-3.5-7S8.5 3.5 8.5 9c0 0-1.462-.5-2-2C6.5 7 5 8 5 12c0 1.41.487 2.82 1.329 4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 19H5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 16c0-2.5-2.5-5-2.5-5s-2.5 2.5-2.5 5"
      />
    </svg>
  );
};
export default Campfire;
