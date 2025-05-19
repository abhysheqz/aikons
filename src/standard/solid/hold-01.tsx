import React from "react";
const Hold_01: React.FC<
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
        d="M14.142 11.5a.45.45 0 0 0 .9 0V5.225a1.225 1.225 0 0 1 2.45 0v7.283a.45.45 0 0 0 .9 0V7.054a1.054 1.054 0 0 1 2.108 0v9.543a4 4 0 0 1-.877 2.499L18.5 20.5v1.253a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V20.5l-4.611-6.664a1.74 1.74 0 0 1-.008-2.183 1.736 1.736 0 0 1 2.487-.234l2.132 2.08V5.105a1.104 1.104 0 1 1 2.209 0V11.5a.45.45 0 0 0 .9 0V3.267a1.267 1.267 0 0 1 2.533 0z"
      />
    </svg>
  );
};
export default Hold_01;
