import React from "react";
const FavouriteSquare: React.FC<
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
        d="M2 12c0-4.243 0-6.364 1.318-7.682S6.758 3 11 3s6.364 0 7.682 1.318S20 7.758 20 12s0 6.364-1.318 7.682S15.242 21 11 21s-6.364 0-7.682-1.318S2 16.242 2 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 16.5s-5-3.177-5-6.25C6 8.731 7.053 7.5 8.5 7.5c.75 0 1.5.265 2.5 1.324 1-1.06 1.75-1.324 2.5-1.324 1.447 0 2.5 1.231 2.5 2.75 0 3.073-5 6.25-5 6.25Z"
      />
    </svg>
  );
};
export default FavouriteSquare;
