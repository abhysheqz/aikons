import React from "react";
const ScreenAddToHome_02: React.FC<
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
        d="M7 17c0 2.357 0 3.535.732 4.268S9.643 22 12 22h3c2.357 0 3.535 0 4.268-.732C20 20.535 20 19.357 20 17V7c0-2.357 0-3.536-.732-4.268C18.535 2 17.357 2 15 2h-3c-2.357 0-3.536 0-4.268.732-.62.62-.715 1.561-.73 3.268"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 2h-4l.5 1h3zM6 9h5v5m-.5-4.5L4 16"
      />
    </svg>
  );
};
export default ScreenAddToHome_02;
