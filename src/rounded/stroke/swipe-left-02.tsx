import React from "react";
const SwipeLeft_02: React.FC<
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
        d="M15 4.502h6m-6 0c0-.7 1.994-2.009 2.5-2.5m-2.5 2.5c0 .7 1.994 2.008 2.5 2.5M15.391 21.998c-.052-1.914.077-2.145.214-2.57.137-.426 1.093-1.962 1.432-3.059 1.094-3.549.074-4.304-1.286-5.31-1.509-1.116-4.354-1.682-5.765-1.56V3.747a1.744 1.744 0 1 0-3.489 0v6.22m0 12.033v-1.014c-.064-.944-1.002-2.061-2.17-3.668-1.202-1.741-1.46-2.62-1.271-3.432.097-.416.35-1.102 1.59-2.275l1.851-1.644m0 4.066V9.966"
      />
    </svg>
  );
};
export default SwipeLeft_02;
