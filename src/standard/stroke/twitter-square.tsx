import React from "react";
const TwitterSquare: React.FC<
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
        d="M14.4 7C13.075 7 12 8.12 12 9.5q0 .318.073.613a6 6 0 0 1-.373.012c-2.02 0-3.796-1.408-4.808-3.06A7.8 7.8 0 0 0 6.6 9.188c0 2.067.802 4.25 2.1 5.607 0 .735-1.8 1.108-2.7 1.203A6.95 6.95 0 0 0 9.6 17c3.889 0 7.057-3.21 7.195-7.226L18 7.313l-2.012.312A2.34 2.34 0 0 0 14.4 7Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.5 4.5v15a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2Z"
      />
    </svg>
  );
};
export default TwitterSquare;
