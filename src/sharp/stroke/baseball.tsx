import React from "react";
const Baseball: React.FC<
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22q0-.28-.015-.555M2 12q.309 0 .614.018m2.726.553q.502.179.978.407m2.368 1.585q.39.351.741.741m1.615 2.419q.208.441.375.905M12 2q0 .28.015.555M22 12q-.308 0-.614-.018m-2.726-.553a10 10 0 0 1-.978-.407m-2.368-1.585q-.39-.351-.741-.741m-1.615-2.419a10 10 0 0 1-.375-.905"
      />
    </svg>
  );
};
export default Baseball;
