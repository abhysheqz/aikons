import React from "react";
const MessageAdd_01: React.FC<
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
        d="M11.21 2.25h1.58c.284 0 .514 0 .71.002V7.5h3v3H21v-3h.842a9.2 9.2 0 0 1 .886 3.36c.022.32.022.691.022 1.35v.08c0 .659 0 1.03-.022 1.35a9.25 9.25 0 0 1-8.588 8.588c-.32.022-.691.022-1.35.022h-1.58c-.659 0-1.03 0-1.35-.022a9.2 9.2 0 0 1-3.423-.917L1.475 22.75l1.304-4.655a9.2 9.2 0 0 1-1.507-4.454c-.022-.32-.022-.692-.022-1.351v-.08c0-.659 0-1.03.022-1.35A9.25 9.25 0 0 1 9.86 2.272c.32-.022.692-.022 1.351-.022m-3.71 12h9v1.5h-9zm0-5H13v1.5H7.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.75 4.25v-3h2v3h3v2h-3v3h-2v-3h-3v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MessageAdd_01;
