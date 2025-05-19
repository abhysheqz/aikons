import React from "react";
const FlowSquare: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 7V2h-5v5zM17.5 22v-5h-5v5zM9 15V9H2v6zM22 4.5h-4.5M5.5 9V4.5h7m9.5 15h-4.5M5.5 15v4.5h7"
      />
    </svg>
  );
};
export default FlowSquare;
