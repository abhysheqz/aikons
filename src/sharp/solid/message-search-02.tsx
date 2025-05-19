import React from "react";
const MessageSearch_02: React.FC<
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
        d="M13.252 5.55a4.3 4.3 0 1 1 7.934 2.295l1.564 1.56-1.341 1.345-1.567-1.562a4.3 4.3 0 0 1-6.59-3.639m4.3-2.4a2.4 2.4 0 1 0 0 4.799 2.4 2.4 0 0 0 0-4.8"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.002 5.55c0-1.236.404-2.378 1.087-3.3H11.21c-.66 0-1.031 0-1.352.022a9.25 9.25 0 0 0-8.587 8.588c-.022.32-.022.691-.022 1.35v.08c0 .659 0 1.03.022 1.35a9.2 9.2 0 0 0 1.507 4.455L1.475 22.75l4.962-1.439a9.2 9.2 0 0 0 3.422.917c.32.022.692.022 1.351.022h1.58c.659 0 1.03 0 1.35-.022a9.25 9.25 0 0 0 8.588-8.588c.022-.32.022-.691.022-1.35v-.08c0-.453 0-.77-.007-1.028l-1.332 1.336-1.814-1.81a5.55 5.55 0 0 1-7.595-5.16M9.009 11.5H7v2h2.009zm3.996 0h-2.01v2h2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MessageSearch_02;
