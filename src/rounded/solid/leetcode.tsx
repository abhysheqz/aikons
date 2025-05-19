import React from "react";
const Leetcode: React.FC<
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
        d="M14.55 3.716a1 1 0 0 0-1.397-1.432l-9.222 9a3.06 3.06 0 0 0 0 4.397l5.555 5.42a3.186 3.186 0 0 0 4.435 0l2.777-2.71a1 1 0 1 0-1.397-1.431l-2.777 2.71c-.45.44-1.191.44-1.641 0l-5.555-5.42a1.06 1.06 0 0 1 0-1.534l5.576-5.442a1.187 1.187 0 0 1 1.62.02l2.777 2.711a1 1 0 0 0 1.397-1.431l-2.778-2.71a3.1 3.1 0 0 0-.928-.628z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 13a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Leetcode;
