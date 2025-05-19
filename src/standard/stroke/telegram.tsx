import React from "react";
const Telegram: React.FC<
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
        d="m15.206 9.763-.901.922L11 14l1.5 1.5m0 0L18 21l4-18-20 8 5.5 3 1 6z"
      />
    </svg>
  );
};
export default Telegram;
