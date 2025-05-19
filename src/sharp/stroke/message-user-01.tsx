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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.863 11h-6.952c0-1.933 1.556-3.5 3.476-3.5s3.476 1.567 3.476 3.5ZM20.125 3.75c0 .966-.778 1.75-1.738 1.75s-1.738-.784-1.738-1.75S17.427 2 18.387 2s1.738.784 1.738 1.75Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.462 15H16.4m-8.94-5h4.47"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.814 13.622c-.664 5.034-3.09 6.157-4.853 7.122-2.14 1.173-8.195 1.22-10.473-.268l-4.43 1.515c-.075.03-.066.006-.037-.069l1.592-3.872C.331 13.447 1.374 4.451 9.281 3.107l3.655-.112"
      />
    </svg>
  );
};
export default MessageUser_01;
