import React from "react";
const ReverseWithdrawal_01: React.FC<
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
        d="m9.5 15 2.5 2.5 2.5-2.5M12 10.5v6.391"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19.185 19.236-1.89-10.588A2 2 0 0 0 15.324 7h-6.65a2 2 0 0 0-1.97 1.648l-1.89 10.588A1.5 1.5 0 0 0 6.292 21h11.416a1.5 1.5 0 0 0 1.477-1.764Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 11c.863-.224 1-1.013 1-1.952V5.016A2.01 2.01 0 0 0 20 3H4c-1.105 0-2 .903-2 2.016v4.032c0 .939.137 1.728 1 1.952"
      />
    </svg>
  );
};
export default ReverseWithdrawal_01;
