import React from "react";
const MessageNotification_02: React.FC<
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
        d="M13 5.5c0-1.208.39-2.326 1.05-3.233a25 25 0 0 0-1.26-.017h-1.58c-.659 0-1.03 0-1.35.022a9.25 9.25 0 0 0-8.588 8.588c-.022.32-.022.691-.022 1.35v.08c0 .659 0 1.03.022 1.35a9.2 9.2 0 0 0 1.507 4.455L1.475 22.75l4.962-1.439a9.2 9.2 0 0 0 3.422.917c.32.022.692.022 1.351.022h1.58c.659 0 1.03 0 1.35-.022a9.25 9.25 0 0 0 8.588-8.588c.022-.32.022-.691.022-1.35v-.08c0-.659 0-1.03-.022-1.35a9.3 9.3 0 0 0-.244-1.568A5.5 5.5 0 0 1 13 5.5m-3.991 6H7v2h2.009zm3.996 0h-2.01v2h2.01z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.25 5.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
    </svg>
  );
};
export default MessageNotification_02;
