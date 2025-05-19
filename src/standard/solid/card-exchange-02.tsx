import React from "react";
const CardExchange_02: React.FC<
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
        d="M2.75 22.5A1.75 1.75 0 0 1 1 20.75v-3.5h12.502v3.5a1.75 1.75 0 0 1-1.75 1.75zM13.502 16.25H1v-1.5c0-.966.783-1.75 1.75-1.75h9.002c.966 0 1.75.784 1.75 1.75zM11.75 11.5A1.75 1.75 0 0 1 10 9.75v-3.5h12.502v3.5a1.75 1.75 0 0 1-1.75 1.75zM22.502 5.25H10v-1.5c0-.966.784-1.75 1.75-1.75h9.002c.966 0 1.75.784 1.75 1.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.75 6.5c-.69 0-1.25.56-1.25 1.25v3a.75.75 0 0 1-1.5 0v-3A2.75 2.75 0 0 1 4.75 5h3a.75.75 0 0 1 .6 1.2l-1.5 2a.75.75 0 0 1-1.35-.45V6.5zM18.75 18c.69 0 1.25-.56 1.25-1.25v-3a.75.75 0 0 1 1.5 0v3a2.75 2.75 0 0 1-2.75 2.75h-3a.75.75 0 0 1-.6-1.2l1.5-2a.75.75 0 0 1 1.35.45V18z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CardExchange_02;
