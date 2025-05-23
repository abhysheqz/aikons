import React from "react";
const MessageFavourite_02: React.FC<
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
        d="M11.21 2.25h1.364c-.575 1.061-.716 2.356-.418 3.568.523 2.13 2.297 3.977 5.163 5.015l.682.246.682-.247c1.511-.547 2.719-1.319 3.6-2.24.238.72.39 1.48.445 2.268.022.32.022.691.022 1.35v.08c0 .659 0 1.03-.022 1.35a9.25 9.25 0 0 1-8.588 8.588c-.32.022-.691.022-1.35.022h-1.58c-.659 0-1.03 0-1.35-.022a9.2 9.2 0 0 1-3.423-.917L1.475 22.75l1.304-4.655a9.2 9.2 0 0 1-1.507-4.454c-.022-.32-.022-.692-.022-1.351v-.08c0-.659 0-1.03.022-1.35A9.25 9.25 0 0 1 9.86 2.272c.32-.022.692-.022 1.351-.022M9.01 11.5H7v2h2.009zm3.996 0h-2.01v2h2.01z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.517 1.481c.185.077.347.165.484.25.137-.085.299-.173.484-.25.653-.27 1.576-.393 2.606.141 1.332.691 1.932 2.308 1.541 3.897-.4 1.625-1.794 3.204-4.375 4.138l-.256.093-.257-.093c-2.58-.934-3.975-2.513-4.374-4.138-.391-1.589.209-3.206 1.54-3.897 1.031-.534 1.954-.411 2.607-.14"
      />
    </svg>
  );
};
export default MessageFavourite_02;
