import React from "react";
const InboxCheck: React.FC<
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
        d="M12 4H2v18h18V12"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20 15h-6a3 3 0 1 1-6 0H2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 6a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m16.24 5.738 1.286 1.256 2.305-2.333"
      />
    </svg>
  );
};
export default InboxCheck;
