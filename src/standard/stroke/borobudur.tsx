import React from "react";
const Borobudur: React.FC<
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
        d="M20 19H4a2 2 0 0 0-2 2v1h20v-1a2 2 0 0 0-2-2M10.5 7l.4-4.005a1.105 1.105 0 0 1 2.2 0L13.5 7M4 19l2.87-9.84A3 3 0 0 1 9.75 7h4.5a3 3 0 0 1 2.88 2.16L20 19"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m11.5 11 .5-.5.5.5-.5.5zM9 15l.5-.5.5.5-.5.5zM14 15l.5-.5.5.5-.5.5z"
      />
    </svg>
  );
};
export default Borobudur;
