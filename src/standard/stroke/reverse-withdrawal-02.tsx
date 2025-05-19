import React from "react";
const ReverseWithdrawal_02: React.FC<
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
        d="M21 11c.863-.224 1-1.013 1-1.952V5.016A2.01 2.01 0 0 0 20 3H4c-1.105 0-2 .903-2 2.016v4.032c0 .939.137 1.728 1 1.952"
      />
      <circle cx={12} cy={14} r={7} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 11c-1.105 0-2 .672-2 1.5s.895 1.5 2 1.5 2 .672 2 1.5-.895 1.5-2 1.5m0-6c.87 0 1.612.417 1.886 1M12 11v-1m0 7c-.87 0-1.612-.417-1.886-1M12 17v1M5 7h14"
      />
    </svg>
  );
};
export default ReverseWithdrawal_02;
