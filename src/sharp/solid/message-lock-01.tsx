import React from "react";
const MessageLock_01: React.FC<
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
        d="M13 13h9.748c-.002.26-.008.458-.02.64a9.25 9.25 0 0 1-8.588 8.588c-.32.022-.691.022-1.35.022h-1.58c-.659 0-1.03 0-1.35-.022a9.2 9.2 0 0 1-3.423-.917L1.475 22.75l1.304-4.655a9.2 9.2 0 0 1-1.507-4.454c-.022-.32-.022-.692-.022-1.351v-.08c0-.659 0-1.03.022-1.35A9.25 9.25 0 0 1 9.86 2.272c.32-.022.692-.022 1.351-.022h1.58c.659 0 1.03 0 1.35.022q.363.025.715.078a4 4 0 0 0-.324 1.15H13zm-5.5 1.25h9v1.5h-9zm0-5H11v1.5H7.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.5 1.25A2.75 2.75 0 0 0 15.75 4v.75h-1.5v7h8.5v-7h-1.5V4a2.75 2.75 0 0 0-2.75-2.75M19.75 4v.75h-2.5V4a1.25 1.25 0 1 1 2.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MessageLock_01;
