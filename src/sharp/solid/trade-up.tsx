import React from "react";
const TradeUp: React.FC<
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
        d="M14 7h7v7h-2V9h-5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.914 8.5 13 16.414l-4-4L4.414 17 3 15.586l6-6 4 4 6.5-6.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TradeUp;
