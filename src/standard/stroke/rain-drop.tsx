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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 13.5a8.5 8.5 0 0 1-17 0c0-5.548 6.192-10.003 8.006-11.19a.89.89 0 0 1 .988 0C14.808 3.498 21 7.953 21 13.5"
      />
    </svg>
  );
};
export default RainDrop;
