import React from "react";
const MessageUser_01: React.FC<
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
        d="M16 3.75a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M14.25 11a4.25 4.25 0 1 1 8.5 0z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.75 3.75c0-.486.092-.95.26-1.376a9 9 0 0 0-.87-.102c-.32-.022-.691-.022-1.35-.022h-1.58c-.659 0-1.03 0-1.35.022a9.25 9.25 0 0 0-8.588 8.588c-.022.32-.022.691-.022 1.35v.08c0 .659 0 1.03.022 1.35a9.2 9.2 0 0 0 1.507 4.455L1.475 22.75l4.962-1.439a9.2 9.2 0 0 0 3.422.917c.32.022.692.022 1.351.022h1.58c.659 0 1.03 0 1.35-.022a9.25 9.25 0 0 0 8.588-8.588c.022-.32.022-.691.022-1.35v-.04H13V11a5.5 5.5 0 0 1 2.712-4.742 3.74 3.74 0 0 1-.962-2.508M7.5 14.25h9v1.5h-9zm0-5H11v1.5H7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MessageUser_01;
