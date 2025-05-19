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
        strokeWidth={1.5}
        d="M12 10.999c-1.105 0-2 .67-2 1.499 0 .827.895 1.498 2 1.498s2 .671 2 1.499c0 .827-.895 1.498-2 1.498M12 11c.87 0 1.612.417 1.886.999M12 10.999V10m0 6.993c-.87 0-1.612-.417-1.886-.999m1.886 1L12.003 18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21 11c.157-.08.293-.179.414-.305C22 10.089 22 9.11 22 7.152s0-2.936-.586-3.544S19.886 3 18 3H6c-1.886 0-2.828 0-3.414.608S2 5.195 2 7.152s0 2.936.586 3.543q.18.188.414.305"
      />
      <circle cx={12} cy={14} r={7} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 7h14"
      />
    </svg>
  );
};
export default ReverseWithdrawal_02;
