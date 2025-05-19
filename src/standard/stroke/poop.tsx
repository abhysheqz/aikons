import React from "react";
const Poop: React.FC<
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
        d="M2 17.5A3.5 3.5 0 0 1 5.5 14h13a3.5 3.5 0 1 1 0 7h-13A3.5 3.5 0 0 1 2 17.5ZM5 11.5A2.5 2.5 0 0 1 7.5 9h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 5 11.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 9h3a3 3 0 0 0 3-3c0-2-1-3.5-3-4 0 0 1 3-1 3h-2a2 2 0 1 0 0 4"
      />
    </svg>
  );
};
export default Poop;
