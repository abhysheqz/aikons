import React from "react";
const Cardigan: React.FC<
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
        d="m6.006 9 1 9.994 1 1.998h8l1-1.998 1-9.994"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.506 3.504s0 4.5 3.5 5.499m0 0V21m0-11.998c3.5-1 3.5-5.5 3.5-5.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m17.309 16.326 1.7 4.66h2.981a.01.01 0 0 0 .01-.01l-.983-14.973-5.99-3.004c-.64.76-2.022 1.225-3.084 1.213-.91-.011-2.176-.36-2.924-1.214L3.011 6.011 2 20.976q0 .01.01.01h3.004l1.794-4.93"
      />
    </svg>
  );
};
export default Cardigan;
