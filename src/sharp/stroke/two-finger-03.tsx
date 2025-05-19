import React from "react";
const TwoFinger_03: React.FC<
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
        d="M11.227 5.579c0-.872-.692-1.579-1.545-1.579-.854 0-1.546.707-1.546 1.579v8.487l-1.669-1.711a1.71 1.71 0 0 0-2.586.146 1.816 1.816 0 0 0-.033 2.182L8.136 22H17.5a3 3 0 0 0 3-3v-6.5A1.5 1.5 0 0 0 19 11h-1.676m-6.097-5.421v5.842m0-5.842V3.545a1.545 1.545 0 1 1 3.091 0V10m0 2.421V10m3.091 2.974V11.5q-.001-.264-.085-.5m0 0a1.5 1.5 0 0 0-1.415-1h-1.59"
      />
    </svg>
  );
};
export default TwoFinger_03;
