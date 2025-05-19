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
        fill="currentColor"
        d="m22 3-4 18-7-7.042 4.24-4.204-5.81 4.019 2.513 2.384L8.5 20l-1-6.042L2 11z"
      />
    </svg>
  );
};
export default Telegram;
