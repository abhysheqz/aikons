import React from "react";
const RainDrop: React.FC<
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
        strokeWidth={1.5}
        d="M20.5 13.5a8.5 8.5 0 0 1-17 0C3.5 7 12 2 12 2s8.5 5 8.5 11.5Z"
      />
    </svg>
  );
};
export default RainDrop;
