import React from "react";
const WalletRemove_01: React.FC<
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
        d="m10.578 14.836-2.75 2.75 2.75 2.75-1.414 1.414L6.414 19l-2.75 2.75-1.414-1.414L5 17.586l-2.75-2.75 1.414-1.414 2.75 2.75 2.75-2.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.75 6.25h3v5h-5.5v5.5h5.5v5H10.934l1.412-1.412-2.75-2.75 2.75-2.75-3.182-3.182-2.75 2.75-2.75-2.75L2.25 13.07V5c0-1.519 1.304-2.75 2.912-2.75H18.75zM5.274 4.082a1.084 1.084 0 0 0 .001 2.167H16.81V4.082z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M21.75 15.25h-4v-2.5h4z" />
    </svg>
  );
};
export default WalletRemove_01;
