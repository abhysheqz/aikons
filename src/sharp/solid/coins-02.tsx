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
        d="M5.25 10a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0"
      />
      <path
        fill="currentColor"
        d="M4.032 7.6c-.184.77-.282 1.574-.282 2.4 0 5.66 4.59 10.25 10.25 10.25.826 0 1.63-.098 2.4-.282A8.75 8.75 0 1 1 4.032 7.6"
      />
    </svg>
  );
};
export default Coins_02;
