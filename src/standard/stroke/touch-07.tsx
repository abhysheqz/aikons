import React from "react";
const Touch_07: React.FC<
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
        d="M14.5 12.355V10.5A1.5 1.5 0 0 0 13 9h-1.5m6 4v-1.5A1.5 1.5 0 0 0 16 10h-1.266M11.5 9v2.421M11.5 9V4a1.5 1.5 0 0 0-3 0v10l-2.308-2.163a1.683 1.683 0 0 0-2.423 2.26l4.14 6.48a2 2 0 0 0 1.685.923h7.906a3 3 0 0 0 3-3v-6A1.5 1.5 0 0 0 19 11h-1.176"
      />
    </svg>
  );
};
export default Touch_07;
