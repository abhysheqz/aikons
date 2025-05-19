import React from "react";
const TradeDown: React.FC<
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
        d="M21 10v7h-7v-2h5v-5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.414 7 9 11.586l4-4 7.914 7.914-1.414 1.414-6.5-6.5-4 4-6-6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TradeDown;
