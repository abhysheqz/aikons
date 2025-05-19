import React from "react";
const MessageBlocked: React.FC<
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
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336zM12.79 1.75c.658 0 1.03 0 1.35.022a9.25 9.25 0 0 1 8.588 8.588c.022.32.022.691.022 1.35v.08c0 .659 0 1.03-.022 1.35a9.2 9.2 0 0 1-1.543 4.51L6.295 2.76a9.2 9.2 0 0 1 3.564-.988c.32-.022.692-.022 1.351-.022z"
      />
      <path
        fill="currentColor"
        d="M14.14 21.728c-.32.022-.692.022-1.35.022h-1.58c-.659 0-1.03 0-1.35-.022a9.2 9.2 0 0 1-3.423-.917L1.475 22.25l1.304-4.655a9.2 9.2 0 0 1-1.507-4.454c-.022-.32-.022-.692-.022-1.351v-.08c0-.659 0-1.03.022-1.35a9.23 9.23 0 0 1 2.942-6.146l15.308 15.308a9.22 9.22 0 0 1-5.382 2.206"
      />
    </svg>
  );
};
export default MessageBlocked;
