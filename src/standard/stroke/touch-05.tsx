import React from "react";
const Touch_05: React.FC<
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
        d="M18.496 22v-1.5l1.123-1.404a4 4 0 0 0 .877-2.5V12.5a2 2 0 0 0-2-2h-1m-9 11.5v-1.5l-4.61-6.664a1.74 1.74 0 0 1-.01-2.183 1.736 1.736 0 0 1 2.488-.234L8.496 13.5v-10a1.5 1.5 0 0 1 3 0v5m0 0v2m0-2h1a2 2 0 0 1 2 2v1m3 1v-1a2 2 0 0 0-2-2h-1"
      />
    </svg>
  );
};
export default Touch_05;
