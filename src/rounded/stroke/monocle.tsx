import React from "react";
const Monocle: React.FC<
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
      viewBox="0 0 24 25"
      {...props}
    >
      <circle
        cx={8}
        cy={8.496}
        r={6}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={16}
        cy={8.496}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 17.496v2c0 .35-.06.687-.17 1M20 22.326a3 3 0 0 1-2 0m-2-4.83v2c0 .35.06.687.17 1m5.83-12v-3m0 9v-3m-6 3v-4"
      />
    </svg>
  );
};
export default Monocle;
