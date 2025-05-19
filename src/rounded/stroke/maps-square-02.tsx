import React from "react";
const MapsSquare_02: React.FC<
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
        strokeWidth={2}
        d="M14.5 9.5h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.5 6C16.394 6 18 7.613 18 9.57c0 1.989-1.632 3.384-3.14 4.333a.72.72 0 0 1-.72 0C12.635 12.945 11 11.565 11 9.57 11 7.613 12.606 6 14.5 6Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 21 3 7M10 14l-6 6"
      />
    </svg>
  );
};
export default MapsSquare_02;
