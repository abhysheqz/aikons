import React from "react";
const MapsCircle_02: React.FC<
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m9 15-4 4m10 2L3 9"
      />
    </svg>
  );
};
export default MapsCircle_02;
