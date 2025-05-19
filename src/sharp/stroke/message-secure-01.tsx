import React from "react";
const MessageSecure_01: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 15h9m-9-5h4.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.767 3.053c-7.81 1.031-9.54 9.792-6.04 14.951l-1.54 3.757c-.031.08-.078.266 0 .236l4.36-1.477c2.373 1.413 8.32 1.531 10.791.095 2.273-1.32 4.77-3.355 4.657-8.339M9.767 3.053q.237-.014.478-.014m-.478.014 1.54-.014"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21.999 5.5V3c-2 0-3.5-1-3.5-1s-1.5 1-3.5 1v2.5c0 3.5 3.5 4.5 3.5 4.5s3.5-1 3.5-4.5Z"
      />
    </svg>
  );
};
export default MessageSecure_01;
