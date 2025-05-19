import React from "react";
const NotificationBubble: React.FC<
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
        d="M14.25 5.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
      <path
        fill="currentColor"
        d="M22.75 12.208v.008c0 .655 0 1.106-.022 1.425a9.25 9.25 0 0 1-8.588 8.587c-.32.022-.691.022-1.35.022h-1.58c-.659 0-1.03 0-1.35-.022a9.2 9.2 0 0 1-3.423-.917l-4.178 1.4a.75.75 0 0 1-.935-.99l1.455-3.626a9.2 9.2 0 0 1-1.507-4.454c-.022-.32-.022-.771-.022-1.43 0-.66 0-1.031.022-1.351A9.25 9.25 0 0 1 9.86 2.272c.32-.022.692-.022 1.351-.022h1.56c.423 0 .73 0 .982.006a5.75 5.75 0 0 0 8.796 7.328q.128.605.175 1.239c.025.328.025.71.027 1.385"
      />
    </svg>
  );
};
export default NotificationBubble;
