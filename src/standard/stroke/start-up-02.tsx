import React from "react";
const StartUp_02: React.FC<
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
        d="m6.45 12.013 5.724 5.84m-5.724-5.84L2.5 8.106s2.975-4.105 7.055-1.479l.367.264M6.45 12.013c1.116-2.122 2.29-3.802 3.472-5.122m2.252 10.962L15.71 21.5s3.96-2.986 1.51-7.097l-.042-.076m-5.004 3.526c2.071-1.134 3.713-2.326 5.004-3.526M9.922 6.89c4.433-4.948 8.986-4.82 11.07-3.872.93 2.127 1.054 6.78-3.814 11.308M5.709 14.5c-.632.632-1.706 2.464-.948 4.739 2.275.758 4.107-.316 4.739-.948"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 8.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
      />
    </svg>
  );
};
export default StartUp_02;
