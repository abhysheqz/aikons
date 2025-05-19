import React from "react";
const MessageEdit_02: React.FC<
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
      <path fill="currentColor" d="M14.75 6.75v2.5h2.5l5.5-5.5-2.5-2.5z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.14 2.272a9.2 9.2 0 0 1 2.714.606L13.5 6.232V10.5h4.268l3.7-3.7a9.2 9.2 0 0 1 1.26 4.06c.022.32.022.691.022 1.35v.08c0 .659 0 1.03-.022 1.35a9.25 9.25 0 0 1-8.588 8.588c-.32.022-.691.022-1.35.022h-1.58c-.659 0-1.03 0-1.35-.022a9.2 9.2 0 0 1-3.423-.917L1.475 22.75l1.304-4.655a9.2 9.2 0 0 1-1.507-4.454c-.022-.32-.022-.693-.022-1.351v-.08c0-.659 0-1.03.022-1.35A9.25 9.25 0 0 1 9.86 2.271c.32-.022.692-.022 1.351-.022h1.58c.659 0 1.03 0 1.35.022M9.01 11.5H7v2h2.009zm3.996 0h-2.01v2h2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MessageEdit_02;
