import React from "react";
const MessageUnlock_02: React.FC<
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
        d="M14.141 2.272q.362.025.715.078a4 4 0 0 0-.324 1.15H13V13h9.748c-.002.26-.008.458-.02.64a9.25 9.25 0 0 1-8.588 8.588c-.32.022-.691.022-1.35.022h-1.58c-.659 0-1.03 0-1.35-.022a9.2 9.2 0 0 1-3.423-.917L1.476 22.75l1.304-4.655a9.2 9.2 0 0 1-1.507-4.454c-.022-.32-.022-.692-.022-1.351v-.08c0-.659 0-1.03.022-1.35A9.25 9.25 0 0 1 9.86 2.272c.32-.022.692-.022 1.351-.022h1.58c.659 0 1.03 0 1.35.022M9.01 11.5H7v2h2.01z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.749 4a2.75 2.75 0 0 1 4.812-1.82l-1.124.993A1.25 1.25 0 0 0 17.249 4v.75h5.5v7h-8.5v-7h1.5z"
      />
    </svg>
  );
};
export default MessageUnlock_02;
