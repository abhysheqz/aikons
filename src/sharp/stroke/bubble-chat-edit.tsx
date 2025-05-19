import React from "react";
const BubbleChatEdit: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.994 12h.01m-4.006 0h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.656 8.98c1.734 6.53-3.447 12.028-9.653 12.028-1.424 0-2.78-.284-4.006-.794L4.02 21.999a.01.01 0 0 1-.014-.012l1.002-3.697c-1.844-1.78-3.005-4.112-3.005-6.791 0-5.5 5.06-10.51 12.006-9.323"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.5 10H14V7.5l5.494-5.493a.01.01 0 0 1 .014 0l2.486 2.486a.01.01 0 0 1 0 .014z"
      />
    </svg>
  );
};
export default BubbleChatEdit;
