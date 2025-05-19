import React from "react";
const Avalanche: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="m10 5.001 2 3.002" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.727 15.05a3.5 3.5 0 0 1-.287 1.084m.287-1.084c.209-2.164-1.685-4.047-3.965-4.047-1.262 0-2.762.5-3.262 1.5m7.227 2.547C20.529 15.042 22 16.404 22 18.085c0 1.39-1.004 2.563-2.373 2.922"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M1 21.007h15.981a.01.01 0 0 0 .009-.016L7.995 7.501m0 0L5.008 3.014a.01.01 0 0 0-.016 0L2 7.502l.996 2.49a.01.01 0 0 0 .014.006L5 9.002l1.99.996a.01.01 0 0 0 .014-.005z"
      />
    </svg>
  );
};
export default Avalanche;
