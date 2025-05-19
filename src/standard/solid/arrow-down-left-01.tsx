import React from "react";
const ArrowDownLeft_01: React.FC<
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
        d="M18.71 6.705a1 1 0 1 0-1.415-1.414L7 15.586V11a1 1 0 1 0-2 0v7a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2H8.414z"
      />
    </svg>
  );
};
export default ArrowDownLeft_01;
