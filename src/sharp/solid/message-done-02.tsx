import React from "react";
const MessageDone_02: React.FC<
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
        d="m22.75 2.664-6.707 6.707-2.707-2.707L14.75 5.25l1.293 1.293 5.293-5.293z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.14 2.272c1.24.086 2.411.415 3.468.939l-1.565 1.564-1.293-1.293-3.182 3.182 4.475 4.475 4.998-4.997a9.2 9.2 0 0 1 1.687 4.717c.022.32.022.692.022 1.351v.08c0 .659 0 1.03-.022 1.35a9.25 9.25 0 0 1-8.588 8.588c-.32.022-.691.022-1.35.022h-1.58c-.659 0-1.03 0-1.35-.022a9.2 9.2 0 0 1-3.423-.917L1.475 22.75l1.304-4.655a9.2 9.2 0 0 1-1.507-4.455c-.022-.32-.022-.692-.022-1.35v-.08c0-.659 0-1.03.022-1.35A9.25 9.25 0 0 1 9.86 2.271c.32-.022.692-.022 1.351-.022h1.58c.659 0 1.03 0 1.35.022M9.01 11.5H7v2h2.009zm3.996 0h-2.01v2h2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MessageDone_02;
