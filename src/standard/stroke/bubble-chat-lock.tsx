import React from "react";
const BubbleChatLock: React.FC<
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
        d="M16.5 5.5H15V11h7V5.5h-1.5m-4 0V4a2 2 0 1 1 4 0v1.5m-4 0h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.992 12H12m-4.006 0h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2C6.477 2 2 6.477 2 12c0 1.576.402 2.941 1.064 4.225.26.503.343 1.085.18 1.627l-.71 2.37a1 1 0 0 0 1.245 1.244l2.369-.71c.542-.163 1.124-.08 1.627.18C9.06 21.598 10.424 22 12 22c4.66 0 8.39-3.187 9.5-7.5"
      />
    </svg>
  );
};
export default BubbleChatLock;
