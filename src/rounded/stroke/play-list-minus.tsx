import React from "react";
const PlayListMinus: React.FC<
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
        d="M2 7.5h19M16.5 2.5l-3 5M9.5 2.5l-3 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11.5 21c-4.478 0-6.718 0-8.109-1.391S2 15.979 2 11.5C2 7.022 2 4.782 3.39 3.391S7.021 2 11.5 2c4.478 0 6.718 0 8.109 1.391 1.39 1.391 1.39 3.63 1.39 8.109M14 18h8"
      />
    </svg>
  );
};
export default PlayListMinus;
