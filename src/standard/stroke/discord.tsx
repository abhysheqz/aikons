import React from "react";
const Discord: React.FC<
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
        d="M7 7c3.889-1.333 6.111-1.333 10 0M7 16.5c3.5 1.33 6.5 1.33 10 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.51 12H7.5m9 0h-.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.953 5.944 9.01 3l-3.814.87a1.97 1.97 0 0 0-1.592 1.375C2.63 8.477 1.393 13.55 2.337 16.957 2.971 18.62 5.041 21 6.511 21l2.5-3.5m5.038-11.556L15.011 3l3.79.87a1.97 1.97 0 0 1 1.593 1.375c.975 3.232 2.212 8.305 1.268 11.712C21.029 18.62 18.98 21 17.51 21l-2.5-3.5"
      />
    </svg>
  );
};
export default Discord;
