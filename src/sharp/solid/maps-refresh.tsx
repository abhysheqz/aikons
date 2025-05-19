import React from "react";
const MapsRefresh: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M18 15.15c-.626 0-1.202.2-1.671.541l-1.116-1.538a4.75 4.75 0 0 1 7.387 5.034.95.95 0 0 1-1.367.601l-1.78-.95.894-1.676.439.234A2.85 2.85 0 0 0 18 15.15m-4.063 1.03a.95.95 0 0 1 .83.032l1.78.95-.894 1.676-.439-.234a2.85 2.85 0 0 0 4.41 1.739l1.084 1.56a4.75 4.75 0 0 1-7.309-5.09.95.95 0 0 1 .538-.633"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m11.93 19.499-3.18-1.366V1.25l5.5 2.36V13a6.24 6.24 0 0 0-2.5 5c0 .517.063 1.019.18 1.499M22.75 13.938v-9.19a.75.75 0 0 0-.75-.75h-6.25v8.17A6.2 6.2 0 0 1 18 11.75c1.901 0 3.604.849 4.75 2.188M1.658 4.164 7.25 1.297v16.747l-5.013 1.668A.75.75 0 0 1 1.25 19V4.831a.75.75 0 0 1 .408-.667"
      />
    </svg>
  );
};
export default MapsRefresh;
