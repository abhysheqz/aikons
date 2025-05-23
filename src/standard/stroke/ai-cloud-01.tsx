import React from "react";
const AiCloud_01: React.FC<
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
        d="M17.478 8h.022a4.5 4.5 0 0 1 4.5 4.5c0 1.414-.48 2.675-1.5 3.5m-3.022-8q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 8a5.5 5.5 0 0 1-.578 2M6.52 7.023A5 5 0 0 0 4 16m2.52-8.977Q6.757 7 7 7c1.126 0 2.165.372 3 1M14 14.5h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1M10.5 20.5V22m3-1.5V22m-3-9v1.5m3-1.5v1.5M9 16H7.5M9 19H7.5m9-3H15m1.5 3H15"
      />
    </svg>
  );
};
export default AiCloud_01;
