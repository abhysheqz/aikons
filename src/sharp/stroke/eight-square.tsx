import React from "react";
const EightSquare: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12.997 12h-1m1 0a2.5 2.5 0 0 0 0-5h-1a2.5 2.5 0 0 0 0 5m1 0a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1 0-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M2.997 21.5h19v-19h-19z"
      />
    </svg>
  );
};
export default EightSquare;
