import React from "react";
const Coins_02: React.FC<
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
        d="M5 9.75a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.093 8.07c.194-.226.545-.035.505.26A10 10 0 0 0 3.5 9.75C3.5 15.41 8.09 20 13.75 20q.723-.001 1.42-.098c.295-.04.486.311.26.504A8.75 8.75 0 0 1 3.094 8.07"
      />
    </svg>
  );
};
export default Coins_02;
