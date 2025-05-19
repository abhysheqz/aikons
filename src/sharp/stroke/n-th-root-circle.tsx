import React from "react";
const NThRootCircle: React.FC<
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
        strokeWidth={1.5}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 9.988h-4.998a.01.01 0 0 0-.01.005L10.505 17a.01.01 0 0 1-.018 0L8.51 13.015a.01.01 0 0 0-.016-.003l-1.492 1.492m4.002-4.004V8.653c0-.92-.688-1.651-1.517-1.651-.67.012-1.327.573-1.483 1.462m0 2.025V8.464m0 0V6.26"
      />
    </svg>
  );
};
export default NThRootCircle;
