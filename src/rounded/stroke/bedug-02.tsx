import React from "react";
const Bedug_02: React.FC<
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
        d="M22 10c0-3.866-1.5-6-4-7-1.466-.622-3.391-1-5.5-1S8.466 2.378 7 3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 3c1.466-.622 3.391-1 5.5-1s4.034.378 5.5 1c2.5 1 4 3.134 4 7s-1.5 6-4 7c-1.466.622-3.391 1-5.5 1s-4.034-.378-5.5-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m9 22 9-9M2 15l5-5M3 10c0-3.866 1.79-7 4-7s4 3.134 4 7-1.79 7-4 7c-1.487 0-2.784-1.42-3.474-3.526"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M7 10h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m18 22-2-2"
      />
    </svg>
  );
};
export default Bedug_02;
