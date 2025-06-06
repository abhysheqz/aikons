import React from "react";
const Kickstarter_02: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 2.5a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.002 16.666 7 7.336c0-.736.56-1.333 1.25-1.333H9.5c.69 0 1.25.597 1.25 1.333v3.301c0 .01.012.014.018.006l3.188-4.065c.387-.6 1.154-.758 1.723-.354l.764.543c.567.404.726 1.219.357 1.83L14.187 12l2.614 3.403c.37.612.21 1.427-.357 1.83l-.764.544c-.569.404-1.336.247-1.723-.354l-3.188-4.067c-.006-.007-.018-.003-.018.006v3.304c0 .737-.56 1.333-1.25 1.333h-1.25c-.69 0-1.248-.596-1.249-1.332Z"
      />
    </svg>
  );
};
export default Kickstarter_02;
