import React from "react";
const MessageUpload_02: React.FC<
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
        d="M14.14 2.272a9.3 9.3 0 0 1 1.807.306l-2.379 2.379 3.182 3.182.043 3.775h4.5l.043-3.775.549-.549a9.2 9.2 0 0 1 .843 3.27c.022.32.022.691.022 1.35v.08c0 .659 0 1.03-.022 1.35a9.25 9.25 0 0 1-8.588 8.588c-.32.022-.691.022-1.35.022h-1.58c-.659 0-1.03 0-1.35-.022a9.2 9.2 0 0 1-3.423-.917L1.475 22.75l1.304-4.655a9.2 9.2 0 0 1-1.507-4.455c-.022-.32-.022-.692-.022-1.35v-.08c0-.659 0-1.03.022-1.35A9.25 9.25 0 0 1 9.86 2.271c.32-.022.692-.022 1.351-.022h1.58c.659 0 1.03 0 1.35.022M9.01 11.5H7v2h2.009zm3.996 0h-2.01v2h2.01z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m19.043 1.25 3.707 3.707-1.414 1.414-1.293-1.293v5.586h-2V5.078L16.75 6.371l-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MessageUpload_02;
