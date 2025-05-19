import React from "react";
const Underpants_03: React.FC<
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
        d="M13.999 19.002s0-9 7.5-9m-11.5 9s0-9-7.5-9M9.999 8.002h4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M1.998 4.999h20.004v4.994L22 9.999l-7.002 8.995-.007.004H8.996l-.007-.004-6.99-8.992-.001-.006z"
      />
    </svg>
  );
};
export default Underpants_03;
