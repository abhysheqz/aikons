import React from "react";
const Message_01: React.FC<
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
        d="M14.14 1.772c-.32-.022-.692-.022-1.35-.022h-1.58c-.659 0-1.03 0-1.35.022a9.25 9.25 0 0 0-8.588 8.588c-.022.32-.022.691-.022 1.35v.08c0 .659 0 1.03.022 1.35a9.2 9.2 0 0 0 1.507 4.455L1.475 22.25l4.962-1.439a9.2 9.2 0 0 0 3.422.917c.32.022.692.022 1.351.022h1.58c.658 0 1.03 0 1.35-.022a9.25 9.25 0 0 0 8.588-8.588c.022-.32.022-.691.022-1.35v-.08c0-.659 0-1.03-.022-1.35a9.25 9.25 0 0 0-8.588-8.588M7.5 13.75h9v1.5h-9zm0-5H13v1.5H7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Message_01;
