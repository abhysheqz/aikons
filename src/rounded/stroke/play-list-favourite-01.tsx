import React from "react";
const PlayListFavourite_01: React.FC<
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
        strokeWidth={1.5}
        d="M20.998 12c.002-.47.002.03.002-.5 0-4.478 0-6.718-1.391-8.109S15.979 2 11.5 2C7.022 2 4.782 2 3.391 3.391S2 7.021 2 11.5c0 4.478 0 6.718 1.391 8.109S7.021 21 11.5 21h.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 7h19M16.5 2l-3 5M9.5 2l-3 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15.015 15.387c1.073-.64 2.009-.382 2.571.028.23.169.346.253.414.253s.183-.084.414-.253c.562-.41 1.498-.668 2.571-.028 1.408.84 1.726 3.609-1.52 5.945-.62.445-.928.668-1.465.668s-.846-.223-1.464-.668c-3.247-2.336-2.929-5.106-1.521-5.945Z"
      />
    </svg>
  );
};
export default PlayListFavourite_01;
