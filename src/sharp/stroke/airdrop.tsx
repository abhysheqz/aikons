import React from "react";
const Airdrop: React.FC<
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
      <circle
        cx={12}
        cy={11}
        r={2}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 17.001A9.96 9.96 0 0 1 2 11C2 5.477 6.477 1 12 1s10 4.477 10 10c0 2.252-.744 4.33-2 6.001"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.528 15a6 6 0 1 1 8.944 0M7.998 22h8l-4-6z"
      />
    </svg>
  );
};
export default Airdrop;
