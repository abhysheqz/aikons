import React from "react";
const FiveSquare: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M9.497 15s.5 2 3 2c1.657 0 3-1.205 3-3s-1.343-3-3-3c-1.5 0-2.5 1-2.5 1h-.5l1-5h5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M2.997 21.5h19v-19h-19z"
      />
    </svg>
  );
};
export default FiveSquare;
