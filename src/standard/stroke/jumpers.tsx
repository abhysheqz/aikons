import React from "react";
const Jumpers: React.FC<
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
        d="M17 8v10.764a1 1 0 0 1-.106.447l-.618 1.236a1 1 0 0 1-.894.553H8.618a1 1 0 0 1-.894-.553l-.618-1.236A1 1 0 0 1 7 18.764V8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15 3 4 2 3.5 12v2l-2 .5-1-1.5-2.5-8M9 3 5 5 1.5 17v2l2 .5 1-1.5L7 10M9 3l3 4 3-4z"
      />
    </svg>
  );
};
export default Jumpers;
