import React from "react";
const Reload: React.FC<
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
        d="m15.167 1 .598 1.118c.404.755.606 1.133.472 1.295-.133.162-.573.031-1.454-.23A9.8 9.8 0 0 0 12 2.78C6.753 2.78 2.5 6.908 2.5 12a8.97 8.97 0 0 0 1.27 4.61M8.834 23l-.598-1.118c-.404-.756-.606-1.134-.472-1.295.133-.162.573-.032 1.454.23.88.261 1.815.402 2.783.402 5.247 0 9.5-4.128 9.5-9.22a8.97 8.97 0 0 0-1.27-4.609"
      />
    </svg>
  );
};
export default Reload;
