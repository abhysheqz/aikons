import React from "react";
const Mp_02: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M19 22H3V2h9l7 7v2m-7-8.5V9h6.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M18 14v2.5h3m0 0V14m0 2.5V19M7 19v-5h.15L9 17l1.83-3H11v5m2 0v-2m0 0v-3h1.5a1.5 1.5 0 0 1 0 3z"
      />
    </svg>
  );
};
export default Mp_02;
