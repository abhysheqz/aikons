import React from "react";
const Exchange_03: React.FC<
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
        d="M16 14h1m2.25 3.5H17m2.25 0a1.75 1.75 0 1 0 0-3.5h-.75m.75 3.5a1.75 1.75 0 1 1 0 3.5h-.75M17 17.5V14m0 3.5V21m-1 0h1m0-7h1.5M17 21h1.5m0-7v-1m0 8v1M11.5 5H16a2 2 0 0 1 2 2v2.622a.377.377 0 0 1-.378.378v0a.38.38 0 0 1-.22-.071L15.99 8.91M11.496 20H7a2 2 0 0 1-2-2v-2.637c0-.2.162-.363.363-.363v0c.088 0 .174.032.24.091l1.394 1.233M7.583 4S6.833 3 5.5 3m0 0C3.833 3 3 4 3 5s.417 2 2.5 2S8 8 8 9s-.833 2-2.5 2m0-8V2m-2.083 8s.75 1 2.083 1m0 0v1"
      />
    </svg>
  );
};
export default Exchange_03;
