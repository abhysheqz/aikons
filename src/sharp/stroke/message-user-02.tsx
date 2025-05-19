import React from "react";
const MessageUser_02: React.FC<
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
        d="M21.907 11h-6.968c0-1.933 1.56-3.5 3.484-3.5a3.49 3.49 0 0 1 3.484 3.5ZM20.165 3.75c0 .966-.78 1.75-1.742 1.75a1.746 1.746 0 0 1-1.742-1.75c0-.966.78-1.75 1.742-1.75s1.742.784 1.742 1.75Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.949 12.5h.008m-3.986 0h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.898 13.611c-.209 4.215-3.343 6.395-5.007 7.133-2.198 1.19-8.236 1.178-10.42-.229l-4.414 1.476c-.074.03-.065.006-.036-.069l1.588-3.916C.427 13.42 1.377 4.45 9.246 3.107l3.639-.112"
      />
    </svg>
  );
};
export default MessageUser_02;
