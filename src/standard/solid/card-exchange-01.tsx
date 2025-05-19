import React from "react";
const CardExchange_01: React.FC<
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
        d="M3.75 4.5c-.69 0-1.25.56-1.25 1.25v3a.75.75 0 0 1-1.5 0v-3A2.75 2.75 0 0 1 3.75 3h3a.75.75 0 0 1 .6 1.2l-1.5 2a.75.75 0 0 1-1.35-.45V4.5zM21.75 14a.75.75 0 0 1 .75.75v3a2.75 2.75 0 0 1-2.75 2.75h-3a.75.75 0 0 1-.6-1.2l1.5-2a.75.75 0 0 1 1.35.45V19h.75c.69 0 1.25-.56 1.25-1.25v-3a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.75 12.5h-3.937a4.25 4.25 0 0 0-4.063-3H9V6.25h13.5v3.5a2.75 2.75 0 0 1-2.75 2.75M22.5 5.25H9v-.5A2.75 2.75 0 0 1 11.75 2h8a2.75 2.75 0 0 1 2.75 2.75zM3.75 21.5A2.75 2.75 0 0 1 1 18.75v-3.5h13.5v3.5a2.75 2.75 0 0 1-2.75 2.75z"
      />
      <path
        fill="currentColor"
        d="M14.5 14.25H1v-.5A2.75 2.75 0 0 1 3.75 11h8a2.75 2.75 0 0 1 2.75 2.75z"
      />
    </svg>
  );
};
export default CardExchange_01;
