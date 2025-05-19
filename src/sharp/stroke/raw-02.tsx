import React from "react";
const Raw_02: React.FC<
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
        d="M7.688 16.917 8.625 19M6 19v-2.5m0 0V14h1.75a1.25 1.25 0 1 1 0 2.5zM15 19l-1.5-5h-1L11 19m1-2h2M17 14v5h.13L19 17l1.89 2H21v-5"
      />
    </svg>
  );
};
export default Raw_02;
