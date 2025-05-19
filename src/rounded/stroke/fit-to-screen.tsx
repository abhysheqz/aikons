import React from "react";
const FitToScreen: React.FC<
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
        d="M3 4v16M21 4v16M15.622 9l.878.879c1 1 1.5 1.5 1.5 2.121s-.5 1.121-1.5 2.121l-.878.879M8.379 9l-.879.879c-1 1-1.5 1.5-1.5 2.121s.5 1.121 1.5 2.121L8.38 15m-2-3h11.243"
      />
    </svg>
  );
};
export default FitToScreen;
