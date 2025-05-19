import React from "react";
const TrafficJam_01: React.FC<
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
        d="M9.942 3.25h10.116l1.5 5h1.192v8.5h-2.5v-2H18V11h-1.512l-.825-2.75h4.329l-1.05-3.5h-7.884L10.683 6H9.117zm10.808 8.76h-1.5V10.5h1.5zm-6.692-4.76H3.942l-1.5 5H1.25v8.5h2.5v-2h10.5v2h2.5v-8.5h-1.192zm-.066 5H4.008l1.05-3.5h7.884zm.758 3.76h-1.5V14.5h1.5zm-11.5 0h1.5V14.5h-1.5zM6.5 16l-.732 1.25h6.469L11.5 16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TrafficJam_01;
