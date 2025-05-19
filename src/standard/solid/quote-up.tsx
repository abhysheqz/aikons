import React from "react";
const QuoteUp: React.FC<
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
        d="M15 10a5 5 0 0 1 5-5 1 1 0 1 0 0-2 7 7 0 0 0-7 7v7.75a2.75 2.75 0 0 0 2.75 2.75h4a2.75 2.75 0 0 0 2.75-2.75v-4A2.75 2.75 0 0 0 19.75 11h-4q-.392.001-.75.104zM3 10a5 5 0 0 1 5-5 1 1 0 0 0 0-2 7 7 0 0 0-7 7v7.75a2.75 2.75 0 0 0 2.75 2.75h4a2.75 2.75 0 0 0 2.75-2.75v-4A2.75 2.75 0 0 0 7.75 11h-4q-.391.001-.75.104z"
      />
    </svg>
  );
};
export default QuoteUp;
