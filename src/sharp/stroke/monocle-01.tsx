import React from "react";
const Monocle_01: React.FC<
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
        d="M19 19.141A9.97 9.97 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.97 9.97 0 0 1 7.141 3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 15a5 5 0 0 0 4 2c.711 0 1.387-.148 2-.416"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.009 9H8M22 21"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0c.542.103.812.155 1.056.235.622.206 1.145.554 1.496.998.137.173.24.371.448.767"
      />
    </svg>
  );
};
export default Monocle_01;
