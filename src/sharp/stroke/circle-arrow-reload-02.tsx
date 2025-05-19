import React from "react";
const CircleArrowReload_02: React.FC<
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.013 16.004h2.41v-7.87a.1.1 0 0 1 .164-.077l2.926 2.427m-5.5-2.48h-2.41v7.87a.1.1 0 0 1-.165.077l-2.925-2.428"
      />
    </svg>
  );
};
export default CircleArrowReload_02;
